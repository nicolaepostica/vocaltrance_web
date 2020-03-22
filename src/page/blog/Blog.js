import React from "react";
import VK, {Comments as VkComments} from 'react-vk';

const handleNewComment = (num, last_comment, date, sign) => {
  console.log(last_comment);
};

const Blog = () => {
  return (
    <section className="qw-mainsection  page type-page status-publish hentry">
      <div className="container qw-top30 qw-bottom30">
        <main className="qw-content qw-relative z-depth-1" id="qwSingleContainer">
          <div className="paper qw-padded ">
            <div className="qw-thecontent">
              <div className="row">
                <div className="col s12 l6">
                  <h1 className="qw-content-title grey-text">Blog</h1>
                </div>
              </div>
              <div className="row">
                <div className="col s12 l6">
                  <VK apiId={'7340379'}>
                    <VkComments onNewComment={handleNewComment}/>
                  </VK>
                </div>
                <div className="col s12 l6">
                  <iframe name="f120743bd69491" width="1000px" height="100px" title="fb:comments Facebook Social Plugin"
                          frameBorder="0" allowTransparency="true" allowFullScreen="true" scrolling="no"
                          allow="encrypted-media"
                          src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=&channel=https://staticxx.facebook.com/connect/xd_arbiter.php?version=45%23cb=f33cf8fd2aa501c&domain=vocaltrance.fm&origin=http://vocaltrance.fm/f3f7c6eb30ec0a8&relation=parent.parent&container_width=689&height=100&href=http://vocaltrance.fm/&locale=ru_RU&numposts=10&sdk=joey&version=v2.8"
                          style={{border: 'none', visibility: 'visible', width: '100%', height: '921px'}}
                          className="">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Blog;
