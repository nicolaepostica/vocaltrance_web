import React from 'react';
import channel_info_static from "../../resources/channel-info-static";
import "./home-styles.css"

const Home = (props) => {
  const {data} = props;
  return (
    <section id="page-3268"
             className="qw-mainsection qw-page-section qw-top30 post-3268 page type-page status-publish hentry">
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
                      <a href="http://radio.vocaltrance.fm/vocaltrance_320.m3u">Vocal Trance 320</a><br/>
                      <a href="http://radio.vocaltrance.fm/vocaltrance_256.m3u">Vocal Trance 256</a><br/>
                      <a href="http://radio.vocaltrance.fm/vocaltrance_128.m3u">Vocal Trance 128</a>
                    </div>
                    <div/>
                  </div>
                  <div>
                    <h5>POSITIVE HOUSE</h5>
                    <div>
                      <a href="http://radio.vocaltrance.fm/positive_320.m3u">Positive House 320</a><br/>
                      <a href="http://radio.vocaltrance.fm/positive_256.m3u">Positive House 256</a><br/>
                      <a href="http://radio.vocaltrance.fm/positive_128.m3u">Positive House 128</a></div>
                    <div/>
                  </div>
                  <div>
                    <h5>VOCAL CHILLOUT</h5>
                    <div>
                      <a href="http://radio.vocaltrance.fm/vocalchillout_320.m3u">Vocal Chillout 320</a><br/>
                      <a href="http://radio.vocaltrance.fm/vocalchillout_256.m3u">Vocal Chillout 256</a><br/>
                      <a href="http://radio.vocaltrance.fm/vocalchillout_128.m3u">Vocal Chillout 128</a>
                    </div>
                    <div/>
                  </div>
                  <div>
                    <h5>UPLIFTING TRANCE</h5>
                    <div>
                      <a href="http://radio.vocaltrance.fm/uplifting_320.m3u">Uplifting Trance 320</a><br/>
                      <a href="http://radio.vocaltrance.fm/uplifting_256.m3u">Uplifting Trance 256</a><br/>
                      <a href="http://radio.vocaltrance.fm/uplifting_128.m3u">Uplifting Trance 128</a>
                    </div>
                    <div/>
                  </div>
                  <div>
                    <h5>DEEP VOCAL HOUSE</h5>
                    <div>
                      <a href="http://radio.vocaltrance.fm/deep_320.m3u">Deep Vocal House 320</a><br/>
                      <a href="http://radio.vocaltrance.fm/deep_256.m3u">Deep Vocal House 256</a><br/>
                      <a href="http://radio.vocaltrance.fm/deep_128.m3u">Deep Vocal House 128</a>
                    </div>
                    <div/>
                  </div>

                </div>
              </div>
              <div className="canc"/>
            </main>
          </div>
          {/*========== Sidebar right col =========*/}
          <div className="col m12 l4  qw-sidebar-right" id="qwSidebarContainer">
            {data.map((item, index) => (
              <aside key={`icecast-widget-${index}`} className="widget icecaststatus">
                <h4 className="qw-widget-title">{channel_info_static[item.key].block_name}</h4>
                <div className="paper z-depth-1">
                  <div className="content">
                    {item.channel_info.map((channel, c_index) => (
                      <div key={`${item.key}-${channel.bitrate}`}>
                        <strong>{`${channel_info_static[item.key].channel_name} ${channel.bitrate}`}</strong><br/>
                        <a
                          href={`${channel_info_static[item.key].url}${channel.bitrate}.m3u`}>{item.track_title}</a>
                        <br/>Listeners Connected:<a className="listener no-hover">{channel.listener}</a><br/>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
