import React from 'react';
import NavBar from "../navbar/NavBar";
import QTPlayer from "../player/QT-Player";
import songs from "../resources/songs-data";

const Header = (props) => {
  const {lastTenStatus, lastTenAction, clipDialog, clipDialogAction, lastTenData, playAction, playListShowAction,
    playListShowStatus, volume, volumeAction, selectedSong, onSongSelected, currentTrack, playStatus} = props;

  return(
    <div className="qw-headercontainer maincolor dark qw-parallax-background-css z-depth-1" data-speed="2">

      <NavBar lastTenStatus={lastTenStatus}
              lastTenAction={lastTenAction}
              clipDialog={clipDialog}
              clipDialogAction={clipDialogAction}
              lastTenData={lastTenData}
      />

      <div className="qw-header-logo-big">
        <a href="http://vocaltrance.fm/">
          <img src={require('../resources/ON-AIR-LOGO-NEGATIVE-m2-1.png')} className="img-responsive"
               alt="Home"/>
        </a>
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
  );
};

export default Header;