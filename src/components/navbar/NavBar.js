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
            <li id="menu-item-3142"
                className="mdi-action-home menu-item menu-item-type-post_type menu-item-object-page menu-item-3142">
              <Link to="/">Home</Link>
            </li>
            <li id="menu-item-3287" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3287">
              <a href="http://www.vocaltrance.fm/">OLD RADIO</a>
            </li>
            <li id="menu-item-2798"
                className="qticon-blogger menu-item menu-item-type-post_type menu-item-object-page menu-item-2798">
              <Link to="/blog">VK / FB</Link>
            </li>
            <li id="menu-item-2984"
                className="mdi-action-account-box menu-item menu-item-type-post_type menu-item-object-page menu-item-2984">
              <Link to="/team">Team</Link>
            </li>
            <li id="menu-item-2986"
                className="qticon-play menu-item menu-item-type-post_type menu-item-object-page menu-item-2986">
              <Link to="/videos">Videos</Link>
            </li>
            <li id="menu-item-2796"
                className="mdi-action-perm-phone-msg menu-item menu-item-type-post_type menu-item-object-page menu-item-2796">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="col s4 qw-onair-widget">
          <div className="last-ten-tracks">
            <div className="row">
              <div className="col s10">
                <a className="dropdown-button btn accentcolor" onClick={() => lastTenAction(!lastTenStatus)}
                   data-activates="dropdown1">Last 10 Tracks</a>
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
