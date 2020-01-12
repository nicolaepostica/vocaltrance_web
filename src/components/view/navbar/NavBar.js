import React from 'react';
import './navbar-styles.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const NavBar = ({LastTenAction, lastTen, clipDialog, ClipDialogAction}) => {
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
                <a className="dropdown-button btn accentcolor" href="#" onClick={() => LastTenAction("show")}
                   data-activates="dropdown1">Last 10 Tracks</a>
                <ul id="dropdown1" className="dropdown-content"
                    style={{display: lastTen}}>
                  <li>
                    <CopyToClipboard text="Alex Leger ft. Ange - Love Me Deep Inside (Ilya Soloviev Progressive Mix)"
                                     onCopy={() => LastTenAction("hide")}>
                      <span className="clipboardClass data-clipboard-text=">Alex Leger ft. Ange - Love Me Deep Inside (Ilya Soloviev Progressive Mix)</span>
                    </CopyToClipboard>
                  </li>
                  <li>
                    <span className="clipboardClass data-clipboard-text=" onClick={() => LastTenAction("hide")}
                          data-clipboard-text="Motif Ft. Hannah Magenta - Never Let Go (Walsh &amp; McAuley Remix)">Motif Ft. Hannah Magenta - Never Let Go (Walsh &amp; McAuley Remix)</span>
                  </li>
                  {/*<li><span className="clipboardClass data-clipboard-text=" onClick="clipboardNotification()"*/}
                  {/*          data-clipboard-text="Gregory Esayan, Natalia Pevcova - Into the Night Feat. Natalia Pevcova (Deepshader &amp; Nazca Remix)">Gregory Esayan, Natalia Pevcova - Into the Night Feat. Natalia Pevcova (Deepshader &amp; Nazca Remix)</span>*/}
                  {/*</li>*/}
                  <li>
                    <span className="clipboardClass data-clipboard-text=" onClick={() => LastTenAction("hide")}
                          data-clipboard-text="Sensetive5 - Right Back (Chron!c Remix)">Sensetive5 - Right Back (Chron!c Remix)</span>
                  </li>
                  <li>
                    <span className="clipboardClass data-clipboard-text=" onClick={() => LastTenAction("hide")}
                          data-clipboard-text="Rake feat Natalie Griffiths - Expectation (Mark Pledger Tough Remix)">Rake feat Natalie Griffiths - Expectation (Mark Pledger Tough Remix)</span>
                  </li>
                  <li>
                    <span className="clipboardClass data-clipboard-text=" onClick={() => LastTenAction("hide")}
                          data-clipboard-text="Digital Affliction - Ethereal Echoes (Original Mix)">Digital Affliction - Ethereal Echoes (Original Mix)</span>
                  </li>
                  <li>
                    <span className="clipboardClass data-clipboard-text=" onClick={() => LastTenAction("hide")}
                          data-clipboard-text="Flashtech - On A Sunny Day (Original Mix)">Flashtech - On A Sunny Day (Original Mix)</span>
                  </li>
                  <li>
                    <span className="clipboardClass data-clipboard-text=" onClick={() => LastTenAction("hide")}
                          data-clipboard-text="Envio - Time To Say Goodbye (Original Mix Edit)">Envio - Time To Say Goodbye (Original Mix Edit)</span>
                  </li>
                  <li>
                    <span className="clipboardClass data-clipboard-text=" onClick={() => LastTenAction("hide")}
                          data-clipboard-text="Musty - Eon (Original Mix)">Musty - Eon (Original Mix)</span>
                  </li>
                  <li>
                    <span className="clipboardClass data-clipboard-text=" onClick={() => LastTenAction("hide")}
                          data-clipboard-text="John Vanger - Euphoria (Illitheas Remix)">John Vanger - Euphoria (Illitheas Remix)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mydialog">
              <div className="dialog" id="clipDialog" style={{display: clipDialog}}>
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
