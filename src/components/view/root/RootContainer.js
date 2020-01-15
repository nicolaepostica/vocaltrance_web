import React, {Component} from "react";
import NavBar from "../navbar/NavBar";
import QTPlayer from "../player/QT-Player";
import './root-styles.css';
import Sound from "react-sound";
import songs from "../../resources/songs-data";
import lasttendata from "../../resources/last-ten-data";

export default class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastTenData: lasttendata,
      lastTenStatus: false,
      clipDialog: false,
      playListShowStatus: false,
      controlled: true,
      currentSong: songs[0],
      position: 0,
      volume: 100,
      playbackRate: 1,
      playStatus: Sound.status.PLAYING,
      currentTrack: '',
      data: [
        {
          "channel_name": "RADIO CHANNELS",
          "id": 246,
          "track_title": "Iris Dee Jay & Robert Holland ft. Erin - Take A Chance (Original Mix)",
          "channel_info": [
            {
              "bitrate": "256",
              "listener": 230
            }
          ]
        },
        {
          "channel_name": "Vocal Trance",
          "id": 246,
          "track_title": "Iris Dee Jay & Robert Holland ft. Erin - Take A Chance (Original Mix)",
          "channel_info": [
            {
              "bitrate": "128",
              "listener": 67
            },
            {
              "bitrate": "256",
              "listener": 7
            },
            {
              "bitrate": "320",
              "listener": 160
            }
          ]
        },
        {
          "channel_name": "Deep Vocal House",
          "id": 230,
          "track_title": "Natalie Gotman - I Want You",
          "channel_info": [
            {
              "bitrate": "128",
              "listener": 229
            },
            {
              "bitrate": "256",
              "listener": 4
            },
            {
              "bitrate": "320",
              "listener": 24
            }
          ]
        },
        {
          "channel_name": "Positive Radio",
          "id": 223,
          "track_title": "Phalguna Somraj - Ku De Ta (Difstate Remix)",
          "channel_info": [
            {
              "bitrate": "128",
              "listener": 13
            },
            {
              "bitrate": "256",
              "listener": 2
            },
            {
              "bitrate": "320",
              "listener": 20
            }
          ]
        },
        {
          "channel_name": "Uplifting Trance ",
          "id": 254,
          "track_title": "Andy Tau - Letting Go (Original Mix)",
          "channel_info": [
            {
              "bitrate": "128",
              "listener": 2
            },
            {
              "bitrate": "256",
              "listener": 1
            },
            {
              "bitrate": "320",
              "listener": 7
            }
          ]
        },
        {
          "channel_name": "Vocal Chillout",
          "id": 249,
          "track_title": "Jo Micali feat. Linnea Schossow - Beyond The Sea (Morning Mix)",
          "channel_info": [
            {
              "bitrate": "128",
              "listener": 11
            },
            {
              "bitrate": "256",
              "listener": 3
            },
            {
              "bitrate": "320",
              "listener": 36
            }
          ]
        }
      ]
    };
  }

  lastTenAction = () => {
    this.setState({lastTenStatus: !this.state.lastTenStatus});
  };

  playAction = () => {
    if (this.state.playStatus === Sound.status.PAUSED) {
      this.setState({playStatus: Sound.status.PLAYING});
    } else {
      this.setState({playStatus: Sound.status.PAUSED})
    }
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
  };

  volumeAction = (e) => {
    this.setState({volume: parseInt(e.target.value)});
  };

  handleSongSelected = (song) => {
    this.setState({currentSong: song,});
    this.playListShowAction();
  };

  render() {
    return <>
      <div className="qw-headercontainer maincolor dark qw-parallax-background-css z-depth-1" data-speed="2">

        <NavBar lastTenStatus={this.state.lastTenStatus}
                lastTenAction={this.lastTenAction}
                clipDialog={this.state.clipDialog}
                clipDialogAction={this.clipDialogAction}
                lastTenData={this.state.lastTenData}
        />

        <div className="qw-header-logo-big">
          <a href="http://vocaltrance.fm/">
            <img src={require('../../resources/ON-AIR-LOGO-NEGATIVE-m2-1.png')} className="img-responsive" alt="Home"/>
          </a>
        </div>
        <div className="onair-mobile-cont">
          <p id="onairMobile" data-clipboard-text={this.state.currentTrack}>{this.state.currentTrack}</p>
        </div>

        <QTPlayer playAction={this.playAction}
                  playListShowAction={this.playListShowAction}
                  playListShowStatus={this.state.playListShowStatus}
                  volume={this.state.volume}
                  volumeAction={this.volumeAction}
                  selectedSong={this.state.currentSong}
                  onSongSelected={this.handleSongSelected}
                  currentTrack={this.state.currentTrack}
                  songs={songs}
                  onSongSelected={this.handleSongSelected}
                  playStatus={this.state.playStatus}
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
              <aside id="icecast-widget-15" className="widget icecaststatus">
                <h4 className="qw-widget-title">Radio Channels</h4>
                <div className="paper z-depth-1">
                  <div className="content">
                    <strong>Vocal Trance</strong><br/>
                    <a href="http://vocaltrance.fm:8000/vocaltrance.m3u">Above &amp; Beyond Feat. Richard Bedford -
                      Thing Called Love (Faraway Skies Remix)</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">222</a><br/>
                  </div>
                </div>
              </aside>
              <aside id="icecast-widget-11" className="widget icecaststatus">
                <h4 className="qw-widget-title">Vocal Trance</h4>
                <div className="paper z-depth-1">
                  <div className="content">
                    <strong>Vocal Trance 320</strong><br/>
                    <a href="http://vocaltrance.fm:8000/vocaltrance_320.m3u">Above &amp; Beyond Feat. Richard Bedford -
                      Thing Called Love (Faraway Skies Remix)</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">128</a><br/>
                    <strong>Vocal Trance 256</strong><br/>
                    <a href="http://vocaltrance.fm:8000/vocaltrance_256.m3u">Above &amp; Beyond Feat. Richard Bedford -
                      Thing Called Love (Faraway Skies Remix)</a>
                    <br/>Listeners Connected:<a href="">7</a><br/>
                    <strong>Vocal Trance 128</strong><br/>
                    <a href="http://vocaltrance.fm:8000/vocaltrance_128.m3u">Above &amp; Beyond Feat. Richard Bedford -
                      Thing Called Love (Faraway Skies Remix)</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">58</a><br/>
                  </div>
                </div>
              </aside>
              <aside id="icecast-widget-12" className="widget icecaststatus">
                <h4 className="qw-widget-title  ">Positive Radio</h4>
                <div className="paper z-depth-1">
                  <div className="content"><strong>Positive Radio 320</strong><br/>
                    <a href="http://vocaltrance.fm:8000/positive_320.m3u">Bee Hunter - The Ride (Original Mix)</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">13</a><br/>
                    <strong>Positive Radio 256</strong><br/>
                    <a href="http://vocaltrance.fm:8000/positive_256.m3u">Bee Hunter - The Ride (Original Mix)</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">3</a><br/>
                    <strong>Positive Radio
                      128</strong><br/>
                    <a href="http://vocaltrance.fm:8000/positive_128.m3u">Bee Hunter - The Ride (Original Mix)</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">14</a><br/></div>
                </div>
              </aside>
              <aside id="icecast-widget-13" className="widget icecaststatus"><h4 className="qw-widget-title  ">Vocal
                Chillout</h4>
                <div className="paper z-depth-1">
                  <div className="content"><strong>Vocal Chillout 320</strong><br/><a
                    href="http://vocaltrance.fm:8000/vocalchillout_320.m3u">Dinka feat. Julie Thompson - Radiate
                    (Original Mix)</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">33</a><br/><strong>Vocal Chillout
                      256</strong><br/><a href="http://vocaltrance.fm:8000/vocalchillout_256.m3u">Dinka feat. Julie
                      Thompson - Radiate (Original Mix)</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">4</a><br/><strong>Vocal Chillout
                      128</strong><br/><a href="http://vocaltrance.fm:8000/vocalchillout_128.m3u">Dinka feat. Julie
                      Thompson - Radiate (Original Mix)</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">20</a><br/></div>
                </div>
              </aside>
              <aside id="icecast-widget-14" className="widget icecaststatus"><h4 className="qw-widget-title  ">Uplifting
                Trance</h4>
                <div className="paper z-depth-1">
                  <div className="content"><strong>Uplifting Trance 320</strong><br/><a
                    href="http://vocaltrance.fm:8000/uplifting_320.m3u">Suncatcher - Midnight City</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">15</a><br/><strong>Uplifting Trance
                      256</strong><br/><a href="http://vocaltrance.fm:8000/uplifting_256.m3u">Suncatcher - Midnight
                      City</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">2</a><br/><strong>Uplifting Trance
                      128</strong><br/><a href="http://vocaltrance.fm:8000/uplifting_128.m3u">Suncatcher - Midnight
                      City</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">2</a><br/></div>
                </div>
              </aside>
              <aside id="icecast-widget-17" className="widget icecaststatus"><h4 className="qw-widget-title  ">Deep
                Vocal House</h4>
                <div className="paper z-depth-1">
                  <div className="content"><strong>Deep Vocal House 320</strong><br/><a
                    href="http://vocaltrance.fm:8000/deep_320.m3u">Andrey Exx, Max Lyazgin feat. Casey - Extasy (The
                    Bestseller Remix)</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">34</a><br/><strong>Deep Vocal House
                      256</strong><br/><a href="http://vocaltrance.fm:8000/deep_256.m3u">Andrey Exx, Max Lyazgin feat.
                      Casey - Extasy (The Bestseller Remix)</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">6</a><br/><strong>Deep Vocal House
                      128</strong><br/><a href="http://vocaltrance.fm:8000/deep_128.m3u">Andrey Exx, Max Lyazgin feat.
                      Casey - Extasy (The Bestseller Remix)</a>
                    <br/>Listeners Connected:<a href="http://vocaltrance.fm">200</a><br/></div>
                </div>
              </aside>
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
            onLoading={({bytesLoaded, bytesTotal}) => {
            }}
            onLoad={() => console.log('Loaded')}
            onPause={() => console.log('Paused')}
            onResume={() => console.log('Resumed')}
            onStop={() => console.log('Stopped')}
            onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED})}
          />
        ) : (
          <Sound
            url={this.state.currentSong.url}
            playStatus={this.state.playStatus}
            volume={this.state.volume}
            playbackRate={this.state.playbackRate}
            onLoading={({bytesLoaded, bytesTotal}) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
            onLoad={() => console.log('Loaded')}
            onPause={() => console.log('Paused')}
            onResume={() => console.log('Resumed')}
            onStop={() => console.log('Stopped')}
            onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED})}
          />
        )
      )}
    </>
  }
}
