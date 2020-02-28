import React, {Component} from "react";
import './video-styles.css'
import './swipebox.css'
import './custom-video-stiles.css'
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import {BASE_URL} from '../../constants';

const HeadVideoUrl = 'https://www.youtube.com/embed/';
const HeadImageUrl = 'https://i1.ytimg.com/';

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

const YoutubeVideo = ({url}) => {
  return (
    <iframe title='YoutubePlayer'
            src={`${HeadVideoUrl}${url}`}
            width="1280"
            height="720"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
    </iframe>
  )
};

const Loader = () => (
  <div className="vdl-subpages-item fgchild vdlcol-md-12">
    <div className="vdl-element" style={{width: "1419px"}}>
      <div className="spinner-div">
        <Spinner/>
      </div>
    </div>
  </div>
);


class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: true,
      player: false,
      videoIndex: 0,
      next: '',
      videos: [],
      loading: false
    };
  }

  getData(url) {
    if (url) {
      if (!this.state.init){
        this.setState({loading: true});
      }
      axios.get(url)
        .then((response) => {
          this.setState(({videos}) => {
            return {
              videos: [...videos, ...response.data.results],
              loading: false,
              init: false,
              next: response.data.next
            }
          });
        })
        .catch((error) => console.log("Can’t access " + BASE_URL + " response. Blocked by browser"));
    }
  }

  componentDidMount() {
    this.getData(`${BASE_URL}get_videos`)
  }

  openPlayer = (index) => {
    this.setState({videoIndex: index, player: true});
  };

  setVideo = (videoIndex) => {
    this.setState({videoIndex: videoIndex});
  };

  changeVideo = action => {
    switch (action) {
      case "preview":
        if (this.state.videoIndex >= 0) {
          this.setVideo(this.state.videoIndex - 1);
        }
        break;
      case "next":
        if (this.state.videoIndex < this.state.videos.length - 1) {
          this.setVideo(this.state.videoIndex + 1);
        }
        break;
      default:
        break;
    }
  };


  render() {
    return (
      <div>
        <section className="qw-mainsection  page type-page status-publish hentry">
          <div className="container qw-top30 qw-bottom30">
            <main className="qw-content qw-relative z-depth-1" id="qwSingleContainer">
              <div className="paper qw-padded ">
                <div className="qw-thecontent">

                  <h1 className="qw-content-title grey-text">Videolove Videos</h1>
                  <div className="vdl-subpages-container">
                    {/*<ul className="vdl-subpages-tagcloud filterOptions">*/}
                    {/*  {Object.keys(tagsCategory).map((item, index) => (*/}
                    {/*    <li key={`cat-${index}`}>*/}
                    {/*      <button className={tagsCategory[item].classname}>{tagsCategory[item].name}</button>*/}
                    {/*    </li>*/}
                    {/*  ))}*/}
                    {/*</ul>*/}
                    <div className="canc"/>
                    {this.state.init ?
                      <div style={{height: "500px"}}>
                        <Loader/>
                      </div>
                      :
                      this.state.videos.map(({id, url, title, img, tags_list}, index) => (
                        <div key={id} className="vdl-subpages-item fgchild vdlcol-md-4" data-type="all">
                          <div className="vdl-element" style={{height: "266.063px", width: "473px"}}>
                            <div className="vdl-elementcontents">
                              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                              <a className="qw-disableembedding vdl-link  videoloveSwipebox"
                                 onClick={() => this.openPlayer(index)}>
                                <img src={`${HeadImageUrl}${img}`}
                                     alt={`alt-${id}`}
                                     className="video-splash-screen"
                                     style={{height: "266.063px", width: "473px"}}/>
                                <span className="detail">
                            <span className="title">{title}</span>
                              <p className="trmlist">
                                {tags_list.map((tag, tagIndex) => (
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
                {this.state.loading ? (
                  <div className="qw-thecontent">
                    <div className="vdl-subpages-container">
                      <Loader/>
                    </div>
                  </div>
                ) : (<></>)}
              </div>
            </main>
          </div>
        </section>
        {this.state.player ? (
          <div id="swipebox-overlay">
            <div id="swipebox-slider">
              <div className="slide">
                <div className="swipebox-video-container">
                  <div className="swipebox-video">
                    <YoutubeVideo url={this.state.videos[this.state.videoIndex].url}/>
                  </div>
                </div>
              </div>
            </div>
            <div id="swipebox-caption" style={{transition: "all 0.5s ease 0s"}} className="visible-bars"/>
            <div id="swipebox-action" style={{transition: "all 0.5s ease 0s"}} className="visible-bars">
              <button id="swipebox-close" onClick={() => {
                this.setState({player: false});
              }}/>
              <button id="swipebox-prev" onClick={() => {
                this.changeVideo('preview')
              }}/>
              <button id="swipebox-next" onClick={() => {
                this.changeVideo('next')
              }}/>
            </div>
          </div>) : <></>
        }

        <p className="text-center qw-scrollbutton-footer">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className="btn-floating btn-large waves-effect waves-light maincolor smoothscroll icon-l tooltipped z-depth-2"
            data-position="top"
            onClick={() => {
              this.getData(this.state.next)
            }}
            data-tooltip="Discover More">
            <i className="mdi-hardware-keyboard-arrow-down icon-l"/>
          </a>
        </p>
      </div>
    );
  }
}

export default Video;
