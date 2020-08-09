import React from 'react';
import NavBar from "../navbar";
import QTPlayer from "../player";
import songs from "../../resources/songs-data";
import {Link} from "react-router-dom";
import {Consumer} from "../context";

const Header = (props) => {
  const {lastTenAction, clipDialogAction, playAction, playListShowAction, volumeAction, onSongSelected} = props;
  
  return (
    <Consumer>
      {
        ({
           lastTenStatus, clipDialog, lastTenData, playListShowStatus, volume, selectedSong, currentTrack, playStatus
         }) => {
          return (
            <div className="qw-headercontainer maincolor dark qw-parallax-background-css z-depth-1" data-speed="2">
              <NavBar lastTenStatus={lastTenStatus}
                      lastTenAction={lastTenAction}
                      clipDialog={clipDialog}
                      clipDialogAction={clipDialogAction}
                      lastTenData={lastTenData}
              />
              <div className="qw-header-logo-big">
                <Link to="/">
                  <img src={require('../../resources/ON-AIR-LOGO-NEGATIVE-m2-1.png')} className="img-responsive"
                       alt="Home"/>
                </Link>
              </div>
              <div className="onair-mobile-cont">
                <p id="onairMobile" data-clipboard-text={currentTrack}>{currentTrack}</p>
              </div>
              <QTPlayer playAction={playAction}
                        playListShowAction={playListShowAction}
                        playListShowStatus={playListShowStatus}
                        volume={volume}
                        volumeAction={volumeAction}
                        selectedSong={selectedSong}
                        onSongSelected={onSongSelected}
                        currentTrack={currentTrack}
                        songs={songs}
                        playStatus={playStatus}
              />
            </div>
          )
        }
      }
    </Consumer>
  )
};

export default Header;
