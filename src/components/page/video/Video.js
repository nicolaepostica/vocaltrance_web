import React, {useState} from "react";
import './video-styles.css'
import './swipebox.css'
import './custom-video-stiles.css'

const videos = [
  {
    frame: '<iframe width="1920" height="957" src="https://www.youtube.com/embed/3Qa-NiRPxEg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/3Qa-NiRPxEg',
    title: 'Simon Patterson feat. Sarah Howells - Here & Now (Official Music Video)',
    img: 'https://i1.ytimg.com/vi/3Qa-NiRPxEg/hqdefault.jpg',
    tags: ['trance'],
  },
  {
    frame: '<iframe width="1920" height="957" src="https://www.youtube.com/embed/_9Uq5-dgt3g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/_9Uq5-dgt3g',
    title: 'Morgan Page - Fight For You (Sultan & Ned Shepard Remix) [Official Music Video]',
    img: 'https://i1.ytimg.com/vi/_9Uq5-dgt3g/hqdefault.jpg',
    tags: ['europe', 'festival', 'house', 'minimal', 'techno'],
  },
  {
    frame: '<iframe width="1280" height="405" src="https://www.youtube.com/embed/o14dJwpSQgA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/o14dJwpSQgA',
    title: 'Alpha Duo Ft. Julie Harrington - Still Far Away (A.R.D.I. Vocal Remix) [TAR] Promo Video Edit ♛',
    img: 'https://i.ytimg.com/vi/o14dJwpSQgA/maxresdefault.jpg',
    tags: ['trance', 'goa'],
  },
  {
    frame: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/HMLEr0JUSjA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/HMLEr0JUSjA',
    title: 'Armin van Buuren feat. Ana Criado - I\'ll Listen (Official Music Video)',
    img: 'https://i.ytimg.com/vi/HMLEr0JUSjA/maxresdefault.jpg',
    tags: ['edm', 'festival', 'europe'],
  },

  {
    frame: '<iframe width="1280" height="405" src="https://www.youtube.com/embed/8xNOX_WovgM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/8xNOX_WovgM',
    title: 'Timur Shafiev - Hold Your Breath (Alexander One & Davide Battista Remix) ⓋⒾⒹⒺⓄ',
    img: 'https://i.ytimg.com/vi/8xNOX_WovgM/maxresdefault.jpg',
    tags: ['trance', 'festival', 'europe'],
  },
  {
    frame: '<iframe width="1112" height="741" src="https://www.youtube.com/embed/IYSUpeieSn8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/IYSUpeieSn8',
    title: 'Sequentia - Don\'t Surrender (Lukas Termena Chillout Remix)',
    img: 'https://i1.ytimg.com/vi/IYSUpeieSn8/hqdefault.jpg',
    tags: ['edm', 'festival', 'europe'],
  },
  {
    frame: '<iframe width="926" height="741" src="https://www.youtube.com/embed/iia0G7X4Cy4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/iia0G7X4Cy4',
    title: 'Armin van Buuren, Perpetuous Dreamer - The Sound of Goodbye (Simon & Shaker Remix)',
    img: 'https://i.ytimg.com/vi_webp/iia0G7X4Cy4/maxresdefault.webp',
    tags: ['edm', 'festival', 'usa'],
  },
  {
    frame: '<iframe width="1112" height="741" src="https://www.youtube.com/embed/8e8AF2_mEzs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/8e8AF2_mEzs',
    title: 'Filip Siejka - Weekend (Lukas Termena Remix) (Cezary Pazura)',
    img: 'https://i1.ytimg.com/vi/8e8AF2_mEzs/hqdefault.jpg',
    tags: ['electro', 'festival', 'house', 'techno', 'usa'],
  },
  {
    frame: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/F6MVUQilS7E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/F6MVUQilS7E',
    title: 'Aimoon ft. Eva Kade - I\'m Out For You (Dennis Pedersen Remix)[Harmonic Breeze] ► Video Edit ♛',
    img: 'https://i.ytimg.com/vi/F6MVUQilS7E/maxresdefault.jpg',
    tags: ['indie', 'festival', 'rock', 'usa'],
  },
  {
    frame: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/e1mvals8RLs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/e1mvals8RLs',
    title: 'Running Man - City Lights (Original Mix) (ASOT 566)',
    img: 'https://i.ytimg.com/vi_webp/e1mvals8RLs/maxresdefault.webp',
    tags: ['edm', 'festival', 'usa'],
  },
  {
    frame: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/CbAxfyfbspo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/CbAxfyfbspo',
    title: 'Decadence 2013 After Movie',
    img: 'https://i.ytimg.com/vi/CbAxfyfbspo/maxresdefault.jpg',
    tags: ['edm', 'festival', 'usa'],
  },
  {
    frame: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/zOo6PDRz6qc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/zOo6PDRz6qc',
    title: 'Dart Rayne - Sophia (Original Mix) [TAR] Promo Music► Video Edit ♛',
    img: 'https://i.ytimg.com/vi_webp/zOo6PDRz6qc/maxresdefault.webp',
    tags: ['ca', 'edm', 'festival'],
  },
  {
    frame: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/EU7l5daJheU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/EU7l5daJheU',
    title: 'Matt Darey & Stan Kolev feat. Aelyn - Follow You (Official Music Video)',
    img: 'https://i.ytimg.com/vi/EU7l5daJheU/maxresdefault.jpg',
    tags: ['edm', 'europe', 'festival'],
  },
  {
    frame: '<iframe width="988" height="741" src="https://www.youtube.com/embed/J1q-lJxV8tk?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/J1q-lJxV8tk?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_',
    title: 'Ruslan-Set & Igor Pumphonia Feat. V Ray -Sensation Of Ease (Original Vocal Mix)',
    img: 'https://i.ytimg.com/vi/J1q-lJxV8tk/maxresdefault.jpg',
    tags: ['europe', 'festival', 'trance'],
  },
  {
    frame: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/TLeZVwBbVUw?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/TLeZVwBbVUw?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_',
    title: 'Cardinal feat. Arielle Maren - Sink Into Me (Protoculture Remix)',
    img: 'https://i.ytimg.com/vi_webp/TLeZVwBbVUw/maxresdefault.webp',
    tags: ['europe', 'festival', 'goa', 'trance'],
  },
  {
    frame: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/O63EkUY4hVM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/O63EkUY4hVM',
    title: 'Cosmic Gate - Barra (Official Music Video)',
    img: 'https://i.ytimg.com/vi_webp/O63EkUY4hVM/maxresdefault.webp',
    tags: ['edm', 'electro', 'festival', 'usa'],
  },
  {
    frame: '<iframe width="988" height="741" src="https://www.youtube.com/embed/VzaYjxwLzXc?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/VzaYjxwLzXc?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_',
    title: 'Beam Feat. Niki Saletta - I Roam (BIG IBIZA HIT !!!)',
    img: 'https://i1.ytimg.com/vi/VzaYjxwLzXc/hqdefault.jpg',
    tags: ['festival', 'europe', 'techno'],
  },
  {
    frame: '<iframe width="934" height="701" src="https://www.youtube.com/embed/4oe4t86tPLk?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/4oe4t86tPLk?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_',
    title: 'Ke$ha Die Young : New Single Studio Version Live vocal @ The Graham Norton Show HQ 1 December 2012.',
    img: 'https://i1.ytimg.com/vi/4oe4t86tPLk/hqdefault.jpg',
    tags: ['festival', 'europe'],
  },
  {
    frame: '<iframe width="934" height="525" src="https://www.youtube.com/embed/bkfDh5zHJzY?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/bkfDh5zHJzY?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_',
    title: 'Alpha 9 - Bliss (Club mix) VIDEO',
    img: 'https://i.ytimg.com/vi_webp/bkfDh5zHJzY/maxresdefault.webp',
    tags: ['electro', 'festival', 'europe', 'rock'],
  },
  {
    frame: '<iframe width="934" height="525" src="https://www.youtube.com/embed/t9mhk17nYW4?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/t9mhk17nYW4?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_',
    title: 'Dash Berlin feat. Emma Hewitt - Waiting (Sean Tyas Remix)',
    img: 'https://i.ytimg.com/vi/t9mhk17nYW4/maxresdefault.jpg',
    tags: ['edm', 'festival', 'europe'],
  },
  {
    frame: '<iframe width="934" height="525" src="https://www.youtube.com/embed/4FM94TizAfE?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/4FM94TizAfE?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_',
    title: 'Boundless Energy - Soundprank',
    img: 'https://i.ytimg.com/vi/4FM94TizAfE/maxresdefault.jpg',
    tags: ['europe', 'experimental', 'festival', 'house', 'techno'],
  },
  {
    frame: '<iframe width="934" height="525" src="https://www.youtube.com/embed/3IMzgsLM-Z8?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/3IMzgsLM-Z8?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_',
    title: 'VillaNaranjos - Jalon (ASOT 599) ASOT 2013 HD VIDEO',
    img: 'https://i.ytimg.com/vi_webp/3IMzgsLM-Z8/maxresdefault.webp',
    tags: ['edm', 'festival', 'usa'],
  },
  {
    frame: '<iframe width="934" height="525" src="https://www.youtube.com/embed/8glOoRbVJLg?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/8glOoRbVJLg?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_',
    title: 'Sunlight Project - Feels Like (Original Mix) [Music Video] [Incepto Music]',
    img: 'https://i.ytimg.com/vi_webp/8glOoRbVJLg/maxresdefault.webp',
    tags: ['edm', 'festival', 'usa'],
  },
  {
    frame: '<iframe width="934" height="525" src="https://www.youtube.com/embed/VYLQfrPaQ-Q?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/embed/VYLQfrPaQ-Q?list=PLvBG4-DwBZZtx2axUAHdn4XjR-FtFmUk_',
    title: 'Chris North - A Drop In The Ocean (Braiman & Falcon Remix) [Music Video] [Infrasonic]',
    img: 'https://i.ytimg.com/vi_webp/VYLQfrPaQ-Q/maxresdefault.webp',
    tags: ['trance',],
  },
];

const tagsCategory = {
  all: {name: 'ALL', classname: "qtsall"},
  ca: {name: 'Central America', classname: "qtscentral-america"},
  edm: {name: 'EDM', classname: "qtsedm"},
  electro: {name: 'Electro', classname: "qtselectro"},
  europe: {name: 'Europe', classname: "qtseurope"},
  experimental: {name: 'Experimental', classname: "qtsexperimental"},
  festival: {name: 'Festival', classname: "qtsfestival"},
  goa: {name: 'GOA', classname: "qtsgoa"},
  house: {name: 'House', classname: "qtshouse"},
  minimal: {name: 'Minimal', classname: "qtsminimal"},
  indie: {name: 'Indie', classname: "qtsindie"},
  rock: {name: 'Rock', classname: "qtsrock"},
  techno: {name: 'Techno', classname: "qtstechno"},
  trance: {name: 'Trance', classname: "qtstrance"},
  usa: {name: 'USA', classname: "qtsusa"},
};

const YoutubeVideo = ({index}) => {
  return (
    <iframe title='YoutubePlayer'
            src={videos[index].url}
            width="1280"
            height="720"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
    </iframe>
  )
};


const Video = () => {
  const [player, setPlayer] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const OpenPlayer = (index) => {
    setVideoIndex(index);
    setPlayer(true);
  };

  return (
    <div>
      <section id="page-2479" className="qw-mainsection post-2479 page type-page status-publish hentry">

        <div className="container qw-top30 qw-bottom30">
          <main className="qw-content qw-relative z-depth-1" id="qwSingleContainer">
            <div className="paper qw-padded ">
              <div className="qw-thecontent">

                <h1 className="qw-content-title grey-text">Videolove Videos</h1>
                <div className="vdl-subpages-container">
                  <ul className="vdl-subpages-tagcloud filterOptions">
                    {Object.keys(tagsCategory).map((item, index) => (
                      <li>
                        <button key={`cat-${tagsCategory[item].classname}`}
                                className={tagsCategory[item].classname}>{tagsCategory[item].name}</button>
                      </li>
                    ))}
                  </ul>
                  <div className="canc"/>
                  {videos.map(({url, title, img, tags}, index) => (
                    <div className="vdl-subpages-item fgchild vdlcol-md-4" data-type="all" key={index}>
                      <div className="vdl-element" style={{height: "266.063px", width: "473px"}}>
                        <div className="vdl-elementcontents">
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="qw-disableembedding vdl-link  videoloveSwipebox"
                             onClick={() => OpenPlayer(index)}>
                            <img src={img}
                                 alt={`alt-${index}`}
                                 className="video-splash-screen"
                                 style={{height: "266.063px", width: "473px"}}/>
                            <span className="detail">
                            <span className="title">{title}</span>
                              <p className="trmlist">
                                {tags.map((tag, tagIndex) => (
                                  <span key={`${tag}-${tagIndex}`} className="trm">{tagsCategory[tag].name}</span>
                                ))}
                              </p>
                          </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                  }
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      {player ? (
        <div id="swipebox-overlay">
          <div id="swipebox-slider">
            <div className="slide">
              <div className="swipebox-video-container">
                <div className="swipebox-video">
                  <YoutubeVideo index={videoIndex}/>
                </div>
              </div>
            </div>
          </div>
          <div id="swipebox-caption" style={{transition: "all 0.5s ease 0s"}} className="visible-bars"/>
          <div id="swipebox-action" style={{transition: "all 0.5s ease 0s"}} className="visible-bars">
            <button id="swipebox-close" onClick={() => {
              setPlayer(false);
            }}/>
            <button id="swipebox-prev" onClick={() => {
              if (videoIndex > 0) {
                setVideoIndex(videoIndex - 1);
              } else {
                console.log('This is first video!');
              }
            }}/>
            <button id="swipebox-next" onClick={() => {
              if (videoIndex < videos.length - 1) {
                setVideoIndex(videoIndex + 1);
              } else {
                console.log('This is last video!');
              }
            }}/>
          </div>
        </div>) : <></>
      }

      <p className="text-center qw-scrollbutton-footer">
        <a
          className="btn-floating btn-large waves-effect waves-light maincolor smoothscroll icon-l tooltipped z-depth-2"
          data-position="top" href="#qwPageFooter" data-tooltip="Discover More">
          <i className="mdi-hardware-keyboard-arrow-down icon-l"></i>
        </a>
      </p>

    </div>


  );
};

export default Video;
