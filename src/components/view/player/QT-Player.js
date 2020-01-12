import React from 'react';
import './player-styles.css';

const setVolume = (volume) => {
  let volumeValue = Math.floor(volume/100*153);
  return `${volumeValue}px`
};

const QTPlayer = ({playIcon, PlayAction, PlayListShowAction, playListShow, VolumeAction, volume, currentTrack}) => {
  return <div className="qw-headernav">
    <nav className="qw-animated " role="navigation" id="qwMainNavbar">
      <div className=" qw-wrapper">
        <div className="container qw-block-100p ">
          <div className="nav-wrapper maincolor  z-depth-2">
            <a className="toogle accentcolor qw-playerbutton tooltipped waves-effect waves-light"
               data-tooltip="Other channels" href="#"
               onClick={() => PlayListShowAction('show')}>
              <div className="title">Other Channels</div>
              <i className="mdi-action-view-list"></i>
            </a>

            <div className="runing-string">
                <span id="marquee" className="clipboardClass" onClick="clipboardNotification()"
                      data-clipboard-text={currentTrack}>{currentTrack}</span>
            </div>
            <div className="qw-block-right">
              <div className="qw-vp">
                <div className="qw-vc qw-themusicplayer-dynamicplace">
                  <div className="qw-musicplayer" id="qwMusicPlayerContainer">
                    <a className="accentcolor qw-playerbutton waves-effect waves-light tooltipped qwPlayerPlay"
                       id="qwPlayerPlay" data-position="left" data-tooltip="Play"
                       onClick={PlayAction}
                       href="#">
                      <i className={playIcon}></i>
                    </a>
                    {/*Volume control*/}
                    <div id="qtVolumeControl"
                         className="qw-animated qw-volume-control maincolor dark hidden-ipad-and-down">
                      <a className="qw-playerbutton maincolor z-depth-2 tooltipped" href="#" data-position="top"
                         data-tooltip="Volume" id="theVolCursor" style={{left: setVolume(volume)}}>
                        <i className="mdi-av-volume-down"></i>
                      </a>
                    </div>
                    {/*  END Volume control  */}
                    {/*Play List*/}
                    <a className="accentcolor qw-playerbutton qw-channellist tooltipped waves-effect waves-light"
                       data-position="top" onClick={() => PlayListShowAction('show')}
                       data-tooltip="Other channels" data-mp3="http://vocaltrance.ru:8000/vocaltrance" href="#">
                      <i className="mdi-action-view-list"></i>
                    </a>
                    <div className={playListShow} id="channelsList">
                      <a href="#" data-mp3="http://vocaltrance.ru:8000/vocaltrance" onClick={() => PlayListShowAction('hide')}
                         className="waves-effect waves-light btn accentcolor qwPlayerPlayList">
                        <i className="mdi-av-play-circle-fill"></i>
                        <span>Vocal Trance | слушать бесплатно радио Вокал Транс</span>
                      </a>
                      <a
                        href="#" data-mp3="http://176.9.36.203:8000/deep_320" data-toggleclass="open"
                        data-target="channelsList"
                        className="waves-effect waves-light btn accentcolor qwPlayerPlayList">
                        <i className="mdi-av-play-circle-fill"></i>
                        <span>Deep Vocal House 320 KB</span>
                      </a>
                      <a href="#" data-mp3="http://176.9.36.203:8000/uplifting_320"
                         onClick={() => PlayListShowAction('hide')}
                         data-toggleclass="open" data-target="channelsList"
                         className="waves-effect waves-light btn accentcolor qwPlayerPlayList">
                        <i className="mdi-av-play-circle-fill"></i>
                        <span>Uplifting Trance 320 KB</span>
                      </a>
                      <a href="#" data-mp3="http://176.9.36.203:8000/vocalchillout_320"
                         data-toggleclass="open" data-target="channelsList"
                         className="waves-effect waves-light btn accentcolor qwPlayerPlayList"><i
                        className="mdi-av-play-circle-fill"></i><span>Vocal Chillout 320 KB</span></a>
                      <a href="#" data-mp3="http://radio.vocaltrance.fm/vocaltrance_320"
                         data-toggleclass="open" data-target="channelsList"
                         className="waves-effect waves-light btn accentcolor qwPlayerPlayList"><i
                        className="mdi-av-play-circle-fill"></i><span>Vocal Trance FM 320 KB</span></a>
                      <a href="#" data-mp3="http://radio.vocaltrance.fm/positive_320"
                         data-toggleclass="open" data-target="channelsList"
                         className="waves-effect waves-light btn accentcolor qwPlayerPlayList">
                        <i className="mdi-av-play-circle-fill"></i>
                        <span>Positive House 320 KB</span>
                      </a>
                    </div>
                  {/*  END Play List  */}
                  </div>
                </div>
              </div>
            </div>
            <a href="#" data-activates="nav-mobile" className="button-collapse">
              <i className="mdi-navigation-menu white-text"></i>
            </a>
            <div className="canc"></div>
          </div>
        </div>
      </div>

    </nav>
  </div>
}

export default QTPlayer;
