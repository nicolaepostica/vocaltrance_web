import React from 'react';
import './navbar-styles.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from "react-router-dom";

const displayLastTen = (lastTenStatus) => {
  if (lastTenStatus) {
    return {display: "block"}
  } else {
    return {display: "none"}
  }
};

const displayClipDialog = (clipDialog) => {
  if (clipDialog) {
    return {display: "block"}
  } else {
    return {display: "none"}
  }
};

const NavBar = ({lastTenAction, lastTenStatus, clipDialog, clipDialogAction, lastTenData}) => {
  return <div className="qw-prenav  qw-darkbg-dark hide-on-med-and-down  white-text" id="qwPrenav">
    <div className="">
      <div className="row">
        <div className="col s8 qw-nooverflow  qw-small qw-caps">
          <ul id="secondarymenu" className="qw-smallmenu qw-nooverflow">
            <li id="menu-item-3000" className="mdi-action-home">
              <Link to="/">Home</Link>
            </li>
            <li id="menu-item-3004" className="qticon-play">
              <Link to="/videos">Videos</Link>
            </li>
            <li id="menu-item-3001" className="qticon-blogger">
              <Link to="/blog">VK / FB</Link>
            </li>
            <li id="menu-item-3005" className="mdi-action-perm-phone-msg">
              <Link to="/contacts">Contacts</Link>
            </li>
            {/*<li id="menu-item-3006">*/}
            {/*  <img className="app-android-icon" src={require('../resources/app_android.png')} alt="Android"/>*/}
            {/*  <a href="https://drive.google.com/file/d/12bLZLesh0y47kIPpfungRXr8w07i63Ps/view?usp=sharing"*/}
            {/*     target="_blank" rel="noopener noreferrer">Android</a>*/}
            {/*</li>*/}
          </ul>
        </div>
        <div className="col s4 qw-onair-widget">
          <div className="last-ten-tracks">
            <div className="row">
              <div className="col s10">
                <button className="dropdown-button btn accentcolor" onClick={() => lastTenAction(!lastTenStatus)}
                   data-activates="dropdown1">Last 10 Tracks</button>
                <ul id="dropdown1" className="dropdown-content"
                    style={displayLastTen(lastTenStatus)}>
                  {
                    lastTenData.map((song, index) => {
                      return (
                        <li key={index}>
                          <CopyToClipboard
                            text={song.track_title}
                            onCopy={
                              () => {
                                lastTenAction();
                                clipDialogAction();
                              }
                            }>
                            <span className="clipboardClass data-clipboard-text=">{song.track_title}</span>
                          </CopyToClipboard>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

            <div className="mydialog">
              <div className="dialog" id="clipDialog" style={displayClipDialog(clipDialog)}>
                Track Copied to clipboard!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default NavBar;
