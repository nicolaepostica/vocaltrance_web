import React from 'react';
import './player-styles.css';
import Sound from "react-sound";

const setVolume = (volume) => {
  let volumeValue = Math.floor(volume / 100 * 154);
  return {left: `${volumeValue}px`, top: "-46px"}
};

const setPlayIcon = (playStatus) => {
  if (playStatus === Sound.status.PAUSED) {
    return "mdi-av-play-arrow"
  } else {
    return "mdi-av-pause"
  }
};

const setPlayListStatus = (playListShowStatus) => {
  if (playListShowStatus) {
    return "qw-radiolist open"
  } else {
    return "qw-radiolist"
  }
};

const playListItemIcon = (currentSong, song, playStatus) => {
  if (currentSong.title === song.title && playStatus === "PLAYING") {
    return "mdi-av-pause-circle-fill"
  } else {
    return "mdi-av-play-circle-fill"
  }
};

const QTPlayer = ({
                    playAction, playListShowAction, playListShowStatus, volumeAction, playStatus,
                    volume, currentTrack, songs, onSongSelected, selectedSong
                  }) => {
  return (
    <div className="qw-headernav" id="qwMainDivNavbar">
      <nav className="qw-animated " role="navigation" id="qwMainNavbar">
        <div className=" qw-wrapper">
          <div className="container qw-block-100p ">
            <div className="nav-wrapper maincolor  z-depth-2">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="toogle accentcolor qw-playerbutton tooltipped waves-effect waves-light"
                 data-tooltip="Other channels"
                 onClick={() => playListShowAction()}>
                <div className="title">Other Channels</div>
                <i className="mdi-action-view-list" />
              </a>

              <div className="runing-string">
                <span id="marquee" className="clipboardClass"
                      data-clipboard-text={currentTrack}>{currentTrack}</span>
              </div>
              <div className="qw-block-right">
                <div className="qw-vp">
                  <div className="qw-vc qw-themusicplayer-dynamicplace">
                    <div className="qw-musicplayer" id="qwMusicPlayerContainer">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a className="accentcolor qw-playerbutton waves-effect waves-light tooltipped qwPlayerPlay"
                         id="qwPlayerPlay" data-position="left" data-tooltip="Play"
                         onClick={playAction}>
                        <i className={setPlayIcon(playStatus)} />
                      </a>
                      {/*Volume control*/}
                      <div id="qtVolumeControl"
                           className="qw-animated qw-volume-control maincolor dark hidden-ipad-and-down">
                        <input
                          id="input-volume-control-id"
                          type="range"
                          min="0"
                          max="100"
                          step="1"
                          value={volume}
                          onChange={volumeAction}
                          className="slider"
                        />
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="qw-playerbutton maincolor z-depth-2 tooltipped"
                           data-position="top"
                           data-tooltip="Volume"
                           id="theVolCursor"
                           style={setVolume(volume)}
                        >
                          <i className="mdi-av-volume-up" />
                        </a>
                      </div>
                      {/*  END Volume control  */}
                      {/*Play List*/}
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a className="accentcolor qw-playerbutton qw-channellist tooltipped waves-effect waves-light"
                         data-position="top" onClick={() => playListShowAction()}
                         data-tooltip="Other channels">
                        <i className="mdi-action-view-list" />
                      </a>
                      <div className={setPlayListStatus(playListShowStatus)} id="channelsList">
                        {
                          songs.map((song, index) => {
                            return (
                              // eslint-disable-next-line jsx-a11y/anchor-is-valid
                              <a onClick={() => onSongSelected(song)}
                                className="waves-effect waves-light btn accentcolor qwPlayerPlayList"
                                key={index}>
                                <i className={playListItemIcon(selectedSong, song, playStatus)}/>
                                <span>{song.title}</span>
                              </a>
                            )
                          })
                        }
                      </div>
                      {/*  END Play List  */}
                    </div>
                  </div>
                </div>
              </div>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a data-activates="nav-mobile" className="button-collapse">
                <i className="mdi-navigation-menu white-text" />
              </a>
              <div className="canc" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default QTPlayer;
