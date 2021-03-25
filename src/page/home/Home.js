import React from 'react';
import "./home-styles.css";
import {SidebarRight} from "./SidebarRight";

const Home = () => (
  <section className="qw-mainsection qw-page-section qw-top30 page type-page status-publish hentry">
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
                    <a href="https://vocaltrance.fm/radio/vocaltrance_320.m3u">Vocal Trance 320</a><br/>
                    <a href="https://vocaltrance.fm/radio/vocaltrance_256.m3u">Vocal Trance 256</a><br/>
                    <a href="https://vocaltrance.fm/radio/vocaltrance_128.m3u">Vocal Trance 128</a>
                  </div>
                  <div/>
                </div>
                <div>
                  <h5>MELODIC PROGRESSIVE HOUSE</h5>
                  <div>
                    <a href="https://vocaltrance.fm/radio/positive_320.m3u">Melodic Progressive House 320</a><br/>
                    <a href="https://vocaltrance.fm/radio/positive_256.m3u">Melodic Progressive House 256</a><br/>
                    <a href="https://vocaltrance.fm/radio/positive_128.m3u">Melodic Progressive House 128</a></div>
                  <div/>
                </div>
                <div>
                  <h5>VOCAL CHILLOUT</h5>
                  <div>
                    <a href="https://vocaltrance.fm/radio/vocalchillout_320.m3u">Vocal Chillout 320</a><br/>
                    <a href="https://vocaltrance.fm/radio/vocalchillout_256.m3u">Vocal Chillout 256</a><br/>
                    <a href="https://vocaltrance.fm/radio/vocalchillout_128.m3u">Vocal Chillout 128</a>
                  </div>
                  <div/>
                </div>
                <div>
                  <h5>UPLIFTING TRANCE</h5>
                  <div>
                    <a href="https://vocaltrance.fm/radio/uplifting_320.m3u">Uplifting Trance 320</a><br/>
                    <a href="https://vocaltrance.fm/radio/uplifting_256.m3u">Uplifting Trance 256</a><br/>
                    <a href="https://vocaltrance.fm/radio/uplifting_128.m3u">Uplifting Trance 128</a>
                  </div>
                  <div/>
                </div>
                <div>
                  <h5>DEEP VOCAL HOUSE</h5>
                  <div>
                    <a href="https://vocaltrance.fm/radio/deep_320.m3u">Deep Vocal House 320</a><br/>
                    <a href="https://vocaltrance.fm/radio/deep_256.m3u">Deep Vocal House 256</a><br/>
                    <a href="https://vocaltrance.fm/radio/deep_128.m3u">Deep Vocal House 128</a>
                  </div>
                  <div/>
                </div>
              </div>
            </div>
            <div className="canc"/>
          </main>
        </div>
        {/*========== Sidebar right col =========*/}
        <SidebarRight />
      </div>
    </div>
  </section>
);

export default Home;
