import React, {Component} from "react";
import "./footer-style.css"

const Footer = ({ref}) => {
  return (
    <footer className="page-footer maincolor dark qw-parallax-background-css qw-insetshadow qw-fancyborder top"
            id="qwPageFooter" data-speed="4" data-type="background">
      <div className="container qw-footer-widgets maincolor z-depth-4">
        <div className="qw-padded">
          <div className="row">
            <div className="col l4 s12 ch1">
            </div>
            <div className="col l4 s12 ch1">
            </div>
            <div className="col l4 s12 ch2">
            </div>
          </div>
        </div>
      </div>
      <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
      <div className="container qw-darkbg-dark2 white-text qw-sub-footer z-depth-4">
        <div className="qw-padded">
          <div className="row">
            <div className="col l4 s12">
              <h4></h4>
            </div>
            <div className="col l8 s12 qw-playericons">
              {/*<a href="https://drive.google.com/file/d/12bLZLesh0y47kIPpfungRXr8w07i63Ps/view?usp=sharing"*/}
              {/*   target="_blank" rel="noopener noreferrer" id="qwPlayerLinkapp_android"*/}
              {/*   className="btn-floating z-depth-2 btn-large waves-effect waves-light accentcolor">*/}
              {/*  <span className="qt-app_android">app_android</span>*/}
              {/*</a>*/}
              {/*<a href="/" target="_blank" id="qwPlayerLinkapp_iphone" class="btn-floating z-depth-2 btn-large waves-effect waves-light accentcolor">*/}
              {/*  <span class="qt-app_iphone">app_iphone</span>*/}
              {/*</a>*/}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright qw-darkbg-dark2 z-depth-4">
        <div className="container maincolor dark">
          <div className="qw-padded">
            <div className="row">
              <div className="col l8 s12 qw-footertext">
                Copyright 2020 Vocal Trance FM
              </div>
              <div className="col l4 s12">
                <div className="qw-footersocial">
                  <a href="https://www.facebook.com/vocaltrancemoldova/" className="qw_social" target="_blank">
                    <span className="qticon-facebook"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

class ScrollButton extends Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render () {
    return (
      <p className="text-center qw-scrollbutton-top">
        <a className="btn-floating btn-large waves-effect waves-light accentcolor smoothscroll icon-l tooltipped z-depth-2"
           data-position="top" onClick={ () => {this.scrollToTop()}} data-tooltip="Top">
          <i className="mdi-hardware-keyboard-arrow-up icon-l"></i>
        </a>
      </p>
    )
  }
}

export default Footer;
export {ScrollButton};
