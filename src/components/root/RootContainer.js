import React, {Component} from "react";
import Header from "../header/Header";
import Home from "../../page/home/Home";
import Blog from "../../page/blog/Blog";
import Team from "../../page/team/Team";
import Video from "../../page/video/Video";
import Contacts from "../../page/contacts/Contacts";
import './root-styles.css';
import Sound from "react-sound";
import songs from "../../resources/songs-data";
import data_template from "../../resources/data-template"
import axios from "axios";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from "../footer/Footer";
import {BASE_URL} from '../../constants';

const key_to_index = {radio: 0, vocaltrance: 1, deep: 2, positive: 3, uplifting: 4, chillout: 5};
const key_to_url = {
  radio: "get_last10_vocaltrance_track",
  vocaltrance: "get_last10_vocaltrance_track",
  deep: "get_last10_deep_track",
  positive: "get_last10_positive_track",
  uplifting: "get_last10_uplifting_track",
  chillout: "get_last10_chillout_track"};

export default class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastTenData: [],
      lastTenStatus: false,
      clipDialog: false,
      playListShowStatus: false,
      controlled: true,
      currentSong: songs[0],
      position: 0,
      volume: 70,
      playbackRate: 1,
      // playStatus: Sound.status.PLAYING,
      playStatus: Sound.status.PAUSED,
      currentTrack: '',
      data: data_template,
      loading_channel_data: true,
    };
  }

  componentDidMount() {
    this.get_channel_info();
    this.get_last_ten();
    // setInterval(this.get_channel_info, 10000);
    // setInterval(this.get_last_ten, 10000);
    let stickToBot = document.getElementById("qwMainDivNavbar").offsetTop + 120;
    window.addEventListener("scroll", ()=>this.onScroll(stickToBot));
  }

  update_current_track = (channel) => {
    this.setState({currentTrack: channel.track_title});
  };

  get_channel_info = () => {
    axios.get(`${BASE_URL}get_current_tracks`)
      .then((response) => {
        this.setState({data: response.data, loading_channel_data: false});
        this.update_current_track(response.data[key_to_index[this.state.currentSong.key]]);
      })
      .catch((error) => console.log("Can’t access " + BASE_URL + " response. Blocked by browser"));
  };

  get_last_ten = () => {
    axios.get(`${BASE_URL}${key_to_url[this.state.currentSong.key]}`)
      .then((response) => {
        this.setState({lastTenData: response.data})
      })
      .catch((error) => console.log("Can’t access " + BASE_URL + " response. Blocked by browser"));
  };

  onScroll = (stickToBot) => {
    let qtBody = document.getElementById("theBody");
    let scrollVal = window.scrollY;
    if (scrollVal > stickToBot) {
      if (!qtBody.classList.contains("qw-stickynav")) {
        qtBody.classList.add("qw-stickynav");
      }
    } else {
      if (qtBody.classList.contains("qw-stickynav")) {
        qtBody.classList.remove("qw-stickynav");
      }
    }
  };

  lastTenAction = (status) => {
    this.setState({lastTenStatus: status});
    this.setState({playListShowStatus: false});
  };

  playAction = () => {
    if (this.state.playStatus === Sound.status.PAUSED) {
      this.setState({playStatus: Sound.status.PLAYING});
    } else {
      this.setState({playStatus: Sound.status.PAUSED})
    }
    this.setState({lastTenStatus: false});
    this.setState({playListShowStatus: false});
  };

  clipDialogAction = () => {
    this.setState({clipDialog: true});
    setTimeout(() => this.setState({clipDialog: false}), 2000);
  };

  playListShowAction = () => {
    if (this.state.playListShowStatus) {
      this.setState({playListShowStatus: false});
    } else {
      this.setState({playListShowStatus: true});
    }
    this.setState({lastTenStatus: false});
  };

  volumeAction = (e) => {
    this.setState({volume: parseInt(e.target.value)});
    this.setState({lastTenStatus: false});
    this.setState({playListShowStatus: false});
  };

  handleSongSelected = async (song) => {
    await this.setState({currentSong: song,});
    await this.update_current_track(this.state.data[key_to_index[song.key]]);
    await this.get_last_ten();
    await this.playListShowAction();
  };

  render() {
    return (
      <>
      <div id="qtMainContainer" className="qw-main-container">
        <Router>
          <Header lastTenStatus={this.state.lastTenStatus}
                  lastTenAction={this.lastTenAction}
                  clipDialog={this.state.clipDialog}
                  clipDialogAction={this.clipDialogAction}
                  lastTenData={this.state.lastTenData}
                  playAction={this.playAction}
                  playListShowAction={this.playListShowAction}
                  playListShowStatus={this.state.playListShowStatus}
                  volume={this.state.volume}
                  volumeAction={this.volumeAction}
                  selectedSong={this.state.currentSong}
                  onSongSelected={this.handleSongSelected}
                  currentTrack={this.state.currentTrack}
                  playStatus={this.state.playStatus}/>

          <Route path="/blog" component={Blog}/>
          <Route path="/team" component={Team}/>
          <Route path="/videos" component={Video}/>
          <Route path="/contacts" component={() => <Contacts data={this.state.data} loading={this.state.loading_channel_data}/>}/>
          <Route path="/" component={() => <Home data={this.state.data} loading={this.state.loading_channel_data}/>} exact={true}/>

          {this.state.currentSong && (
            this.state.controlled ? (
              <Sound
                url={this.state.currentSong.url}
                playStatus={this.state.playStatus}
                volume={this.state.volume}
                playbackRate={this.state.playbackRate}
                onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED})}
              />
            ) : (
              <Sound
                url={this.state.currentSong.url}
                playStatus={this.state.playStatus}
                volume={this.state.volume}
                playbackRate={this.state.playbackRate}
                onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED})}
              />
            )
          )}
        </Router>
      </div>
      <div className = "qw-pushpin-block" />
      <Footer />
    </>
    )
  }
}
