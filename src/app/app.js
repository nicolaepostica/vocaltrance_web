import React, {Component} from "react";
import Header from "../components/header";
import Home from "../page/home";
import Blog from "../page/blog";
import Video from "../page/video";
import Contacts from "../page/contacts";
import './app-styles.css';
import Sound from "react-sound";
import songs from "../resources/songs-data";
import data_template from "../resources/data-template"
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from "../components/footer";
import {BASE_URL} from '../constants';
import {createBrowserHistory} from 'history';
import {Provider} from "../components/context";

const key_to_index = {radio: 0, vocaltrance: 1, deep: 2, positive: 3, uplifting: 4, chillout: 5};
const key_to_url = {
  radio: "get_last10_vocaltrance_track",
  vocaltrance: "get_last10_vocaltrance_track",
  deep: "get_last10_deep_track",
  positive: "get_last10_positive_track",
  uplifting: "get_last10_uplifting_track",
  chillout: "get_last10_chillout_track"
};

const history = createBrowserHistory();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastTenData: [],
      lastTenStatus: false,
      clipDialog: false,
      playListShowStatus: false,
      controlled: true,
      selectedSong: songs[0],
      position: 0,
      volume: 70,
      playbackRate: 1,
      playStatus: Sound.status.PLAYING,
      currentTrack: '',
      data: data_template,
      loading_channel_data: true,
    };
  }
  
  componentDidMount() {
    this.get_channel_info();
    this.get_last_ten();
    setInterval(this.get_channel_info, 10000);
    setInterval(this.get_last_ten, 10000);
    let stickToBot = document.getElementById("qwMainDivNavbar").offsetTop + 120;
    window.addEventListener("scroll", () => this.onScroll(stickToBot));
  }
  
  update_current_track = (channel) => {
    this.setState({currentTrack: channel.track_title});
  };
  
  get_channel_info = () => {
    axios.get(`${BASE_URL}get_current_tracks`)
      .then((response) => {
        this.setState({data: response.data, loading_channel_data: false});
        this.update_current_track(response.data[key_to_index[this.state.selectedSong.key]]);
      })
      .catch(() => console.log("Can’t access " + BASE_URL + " response. Blocked by browser"));
  };
  
  get_last_ten = () => {
    axios.get(`${BASE_URL}${key_to_url[this.state.selectedSong.key]}`)
      .then((response) => {
        this.setState({lastTenData: response.data})
      })
      .catch(() => console.log("Can’t access " + BASE_URL + " response. Blocked by browser"));
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
    await this.setState({selectedSong: song,});
    await this.update_current_track(this.state.data[key_to_index[song.key]]);
    await this.get_last_ten();
    await this.playListShowAction();
  };
  
  render() {
    return (
      <Provider value={this.state}>
        <div id="qtMainContainer" className="qw-main-container">
          <Router history={history}>
            <Header lastTenAction={this.lastTenAction}
                    clipDialogAction={this.clipDialogAction}
                    playAction={this.playAction}
                    playListShowAction={this.playListShowAction}
                    volumeAction={this.volumeAction}
                    onSongSelected={this.handleSongSelected}/>
            <Switch>
              <Route path="/blog" component={Blog}/>
              <Route path="/videos" component={Video}/>
              <Route path="/contacts" component={Contacts}/>
              <Route path="/" component={Home} exact={true}/>
              <Route render={() => <h2>Page not Found</h2>}/>
            </Switch>
            
            {/*{this.state.selectedSong && (*/}
            {/*  this.state.controlled ? (*/}
            {/*    <Sound*/}
            {/*      url={this.state.selectedSong.url}*/}
            {/*      playStatus={this.state.playStatus}*/}
            {/*      volume={this.state.volume}*/}
            {/*      playbackRate={this.state.playbackRate}*/}
            {/*      onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED})}*/}
            {/*    />*/}
            {/*  ) : (*/}
            {/*    <Sound*/}
            {/*      url={this.state.selectedSong.url}*/}
            {/*      playStatus={this.state.playStatus}*/}
            {/*      volume={this.state.volume}*/}
            {/*      playbackRate={this.state.playbackRate}*/}
            {/*      onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED})}*/}
            {/*    />*/}
            {/*  )*/}
            {/*)}*/}
          </Router>
        </div>
        <div className="qw-pushpin-block"/>
        <Footer/>
      </Provider>
    )
  }
}
