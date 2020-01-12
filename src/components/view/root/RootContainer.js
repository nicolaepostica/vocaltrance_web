import React, {Component} from "react";
import NavBar from "../navbar/NavBar";
import QTPlayer from "../player/QT-Player";
import './root-styles.css';
import Sound from "react-sound";
import songs from "../../songs";

export default class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastTen: 'none',
      clipDialog: 'none',
      playIcon: 'mdi-av-pause',
      playListShow: 'qw-radiolist',
      controlled: true,
      currentSong: songs[0],
      position: 0,
      volume: 100,
      playbackRate: 1,
      playStatus: Sound.status.PAUSED,
      currentTrack: 'Aneym and Nitrous Oxide - Believer (Extended Mix)',
    };
  }

  LastTenAction = (param) => {
    if (param === "show") {
      this.setState({lastTen: 'block'});
    } else {
      this.setState({lastTen: 'none'});
      this.ClipDialogAction('show');
    }
  };

  PlayAction = () => {
    if (this.state.playStatus === Sound.status.PAUSED) {
      this.setState({playIcon: 'mdi-av-pause'});
      this.setState({ playStatus: Sound.status.PLAYING });
    } else {
      this.setState({playIcon: 'mdi-av-play-arrow'});
      this.setState({ playStatus: Sound.status.PAUSED })
    }
  };

  ClipDialogAction = (param) => {
    if (param === "show") {
      this.setState({clipDialog: 'block'});
      setTimeout(() => this.setState({clipDialog: 'none'}), 2000);
    } else {
      this.setState({clipDialog: 'none'});
    }
  };

  PlayListShowAction = (param) => {
    if (param === "show") {
      this.setState({playListShow: 'qw-radiolist open'});
    } else {
      this.setState({playListShow: 'qw-radiolist'});
    }
  };

  VolumeAction = (param) => {
    this.setState({volume: param});
  };

  render() {
    return <>
      <div className="qw-headercontainer maincolor dark qw-parallax-background-css z-depth-1" data-speed="2">

        <NavBar lastTen={this.state.lastTen}
                LastTenAction={this.LastTenAction}
                clipDialog={this.state.clipDialog}
                ClipDialogAction={this.ClipDialogAction}
        />


        <div className="qw-header-logo-big">
          <a href="http://vocaltrance.fm/">
            <img src={require('../../resources/ON-AIR-LOGO-NEGATIVE-m2-1.png')} className="img-responsive" alt="Home"/>
          </a>
        </div>

        {/*ON AIR for low resolution-->*/}
        <div className="onair-mobile-cont">
          <p id="onairMobile" data-clipboard-text={this.state.currentTrack}>{this.state.currentTrack}</p>
        </div>


        <QTPlayer PlayAction={this.PlayAction}
                  playIcon={this.state.playIcon}
                  PlayListShowAction={this.PlayListShowAction}
                  playListShow={this.state.playListShow}
                  volume={this.state.volume}
                  VolumeAction={this.VolumeAction}
                  selectedSong={this.state.currentSong}
                  onSongSelected={this.handleSongSelected}
                  currentTrack={this.state.currentTrack}
        />


      </div>
      <section id="page-3268"
               className="qw-mainsection qw-page-section qw-top30 post-3268 page type-page status-publish hentry">
        <div className="container  qw-bottom30">
          <div className="row">
            <div className="col s12 m12 l8 ">
              <main className="qw-content qw-relative z-depth-1" id="qwSingleContainer">
                <div className="paper qw-padded ">
                  <div className="qw-thecontent">
                    <h1 className="qw-content-title grey-text">
                      Radio Channels </h1>
                    <hr className="qw-separator triangle right small"/>

                    <h4>RADIO CHANNELS M3U</h4>
                    <div>
                      <h5>VOCAL TRANCE</h5>
                      <div>
                        <a href="http://radio.vocaltrance.fm/vocaltrance_320.m3u">Vocal Trance 320</a><br/>
                        <a href="http://radio.vocaltrance.fm/vocaltrance_256.m3u">Vocal Trance 256</a><br/>
                        <a href="http://radio.vocaltrance.fm/vocaltrance_128.m3u">Vocal Trance 128</a>
                      </div>
                      <div/>
                    </div>
                    <div>
                      <h5>POSITIVE HOUSE</h5>
                      <div>
                        <a href="http://radio.vocaltrance.fm/positive_320.m3u">Positive House 320</a><br/>
                        <a href="http://radio.vocaltrance.fm/positive_256.m3u">Positive House 256</a><br/>
                        <a href="http://radio.vocaltrance.fm/positive_128.m3u">Positive House 128</a></div>
                      <div/>
                    </div>
                    <div>
                      <h5>VOCAL CHILLOUT</h5>
                      <div>
                        <a href="http://radio.vocaltrance.fm/vocalchillout_320.m3u">Vocal Chillout 320</a><br/>
                        <a href="http://radio.vocaltrance.fm/vocalchillout_256.m3u">Vocal Chillout 256</a><br/>
                        <a href="http://radio.vocaltrance.fm/vocalchillout_128.m3u">Vocal Chillout 128</a>
                      </div>
                      <div/>
                    </div>
                    <div>
                      <h5>UPLIFTING TRANCE</h5>
                      <div>
                        <a href="http://radio.vocaltrance.fm/uplifting_320.m3u">Uplifting Trance 320</a><br/>
                        <a href="http://radio.vocaltrance.fm/uplifting_256.m3u">Uplifting Trance 256</a><br/>
                        <a href="http://radio.vocaltrance.fm/uplifting_128.m3u">Uplifting Trance 128</a>
                      </div>
                      <div/>
                    </div>
                    <div>
                      <h5>DEEP VOCAL HOUSE</h5>
                      <div>
                        <a href="http://radio.vocaltrance.fm/deep_320.m3u">Deep Vocal House 320</a><br/>
                        <a href="http://radio.vocaltrance.fm/deep_256.m3u">Deep Vocal House 256</a><br/>
                        <a href="http://radio.vocaltrance.fm/deep_128.m3u">Deep Vocal House 128</a>
                      </div>
                      <div/>
                    </div>

                  </div>
                </div>
                <div className="canc"/>
              </main>
            </div>
            {/*========== Sidebar right col =========*/}
            <div className="col m12 l4  qw-sidebar-right" id="qwSidebarContainer">
            </div>
          </div>
        </div>
      </section>
      {this.state.currentSong && (
        this.state.controlled ? (
          <Sound
            url={this.state.currentSong.url}
            playStatus={this.state.playStatus}
            volume={this.state.volume}
            playbackRate={this.state.playbackRate}
            onLoading={({ bytesLoaded, bytesTotal }) =>  {}}
            onLoad={() => console.log('Loaded')}
            onPause={() => console.log('Paused')}
            onResume={() => console.log('Resumed')}
            onStop={() => console.log('Stopped')}
            onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
          />
        ) : (
          <Sound
            url={this.state.currentSong.url}
            playStatus={this.state.playStatus}
            volume={this.state.volume}
            playbackRate={this.state.playbackRate}
            onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
            onLoad={() => console.log('Loaded')}
            onPause={() => console.log('Paused')}
            onResume={() => console.log('Resumed')}
            onStop={() => console.log('Stopped')}
            onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
          />
        )
      )}
    </>
  }
}
