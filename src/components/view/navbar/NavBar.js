import React from 'react';
import './navbar-styles.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
              <a href="http://vocaltrance.fm/blog/">Home</a>
            </li>
            <li id="menu-item-3287" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3287">
              <a href="http://www2.vocaltrance.fm/">NEW RADIO</a>
            </li>
            <li id="menu-item-2798"
                className="qticon-blogger menu-item menu-item-type-post_type menu-item-object-page menu-item-2798">
              <a href="http://vocaltrance.fm/show-slider/">VK / FB</a>
            </li>
            <li id="menu-item-2984"
                className="mdi-action-account-box menu-item menu-item-type-post_type menu-item-object-page menu-item-2984">
              <a href="http://vocaltrance.fm/team-members-page/">Team</a>
            </li>
            <li id="menu-item-2986"
                className="qticon-play menu-item menu-item-type-post_type menu-item-object-page menu-item-2986">
              <a href="http://vocaltrance.fm/videolove-filterable-videos/">Videos</a>
            </li>
            <li id="menu-item-2796"
                className="mdi-action-perm-phone-msg menu-item menu-item-type-post_type menu-item-object-page menu-item-2796">
              <a href="http://vocaltrance.fm/contacts/">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="col s4 qw-onair-widget">
          <div className="last-ten-tracks">
            <div className="row">
              <div className="col s10">
                <a className="dropdown-button btn accentcolor" onClick={() => lastTenAction()}
                   data-activates="dropdown1">Last 10 Tracks</a>
                <ul id="dropdown1" className="dropdown-content"
                    style={displayLastTen(lastTenStatus)}>
                  {
                    lastTenData.map((song, index) => {
                      return (
                        <li key={index}>
                          <CopyToClipboard
                            text={song}
                            onCopy={
                              () => {
                                lastTenAction();
                                clipDialogAction();
                              }
                            }>
                            <span className="clipboardClass data-clipboard-text=">{song}</span>
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
