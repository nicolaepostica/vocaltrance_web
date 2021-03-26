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
                  <div className="row">
                    <div className="col s4 m4 l4">
                      <a href="https://vocaltrance.fm/radio/vocaltrance_320.m3u">Vocal Trance 320</a><br/>
                      <a href="https://vocaltrance.fm/radio/vocaltrance_256.m3u">Vocal Trance 256</a><br/>
                      <a href="https://vocaltrance.fm/radio/vocaltrance_128.m3u">Vocal Trance 128</a>
                    </div>
                    <div className="col s8 m8 l8">
                      <p style={{'margin': '0px'}}></p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5>MELODIC PROGRESSIVE HOUSE</h5>
                  <div className="row">
                    <div className="col s4 m4 l4">
                      <a href="https://vocaltrance.fm/radio/positive_320.m3u">Melodic Progressive House 320</a><br/>
                      <a href="https://vocaltrance.fm/radio/positive_256.m3u">Melodic Progressive House 256</a><br/>
                      <a href="https://vocaltrance.fm/radio/positive_128.m3u">Melodic Progressive House 128</a>
                    </div>
                    <div className="col s8 m8 l8">
                      <p style={{'margin': '0px', 'line-height': 'inherit'}}>
                        No matter what kind of problems you have, no matter if it is raining or
                        snowing in your city, no matter what your mood is now.
                        Just tune in to our Melodic Progressive House channel and we will teleport
                        you to the beach where the sun is always shining and your mood just flies
                        into space.
                        You can do it 24/7, so enjoy masterpieces from Mark & Lukas • Z8phyR •
                        Yusuke Teranishi • Roald Velden • Aaron Dmitriew • Adam Sein • Bee Hunter •
                        Lumidelic • Inxisiv • SixthSense • Myni8hte • Vitodito • Shingo Nakamura •
                        Vintage & Morelli • Gregory Esayan • Sundriver • Talamanca • Nigel Good •
                        Terry Da Libra • Dezza • eleven.five • and more of our leading progressive
                        DJs.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5>VOCAL CHILLOUT</h5>
                  <div className="row">
                    <div className="col s4 m4 l4">
                      <a href="https://vocaltrance.fm/radio/vocalchillout_320.m3u">Vocal Chillout 320</a><br/>
                      <a href="https://vocaltrance.fm/radio/vocalchillout_256.m3u">Vocal Chillout 256</a><br/>
                      <a href="https://vocaltrance.fm/radio/vocalchillout_128.m3u">Vocal Chillout 128</a>
                    </div>
                    <div className="col s8 m8 l8">
                      <p style={{'margin': '0px', 'line-height': 'inherit'}}>
                        When you are relaxed you need tracks that rock you on the sea wave and
                        which you want to be neverending!
                        So go to our Vocal Chillout channel, sit back and listen to Zetandel •
                        The Ambientalist • Seven24 • Oleg Byonic • Max Denoise • Chris Wonderful •
                        AK • York • Whitewildbear • Owsey and other Chillout talents.
                      </p>
                    </div>
                  </div>
                  <div/>
                </div>
                <div>
                  <h5>UPLIFTING TRANCE</h5>
                  <div className="row">
                    <div className="col s4 m4 l4">
                      <a href="https://vocaltrance.fm/radio/uplifting_320.m3u">Uplifting Trance 320</a><br/>
                      <a href="https://vocaltrance.fm/radio/uplifting_256.m3u">Uplifting Trance 256</a><br/>
                      <a href="https://vocaltrance.fm/radio/uplifting_128.m3u">Uplifting Trance 128</a>
                    </div>
                    <div className="col s8 m8 l8">
                      <p style={{'margin': '0px'}}>

                      </p>
                    </div>
                  </div>
                  <div/>
                </div>
                <div>
                  <h5>DEEP VOCAL HOUSE</h5>
                  <div className="row">
                    <div className="col s4 m4 l4">
                      <a href="https://vocaltrance.fm/radio/deep_320.m3u">Deep Vocal House 320</a><br/>
                      <a href="https://vocaltrance.fm/radio/deep_256.m3u">Deep Vocal House 256</a><br/>
                      <a href="https://vocaltrance.fm/radio/deep_128.m3u">Deep Vocal House 128</a>
                    </div>
                    <div className="col s8 m8 l8">
                      <p style={{'margin': '0px', 'line-height': 'inherit'}}>
                        Are you looking for dance rhythms with 120-130 beats per minute which
                        you associate with beautiful girls, sea resorts and night clubs?
                        We have a magic pill for you - Deep Vocal House channel.
                        Enjoy tracks from A-Mase • Anton Ishutin • Deep Sound Effect • Nikko Culture •
                        VetLove • Suprafive • Max Oazo • Ηοusenick • Costa Mee • Nando Fortunato •
                        Sharapov • Mike Drozdov • Apelislin and other TOP producers&remixers.
                      </p>
                    </div>
                  </div>
                  <div/>
                </div>
              </div>
            </div>
            <div className="canc"/>
          </main>
        </div>
        {/*========== Sidebar right col =========*/}
        <SidebarRight/>
      </div>
    </div>
  </section>
);

export default Home;
