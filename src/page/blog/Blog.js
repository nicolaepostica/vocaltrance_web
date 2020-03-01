import React from "react";
import VK, {Comments as VkComments} from 'react-vk';
import {FacebookProvider, Comments as FacebookComments} from 'react-facebook';

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
                  <div id="vk_comments" style={{width: '665px', height: '269px', background: 'none'}}>
                    <VK apiId={'4378299'}>
                      <VkComments onNewComment={handleNewComment}/>
                    </VK>
                  </div>
                </div>
                <div className="col s12 l6">
                  <div className="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop" style={{width: '100%'}}>
                    <span style={{verticalAlign: 'bottom', width: '100%', height: '921px'}}>
                      <FacebookProvider appId="123456789">
                        <FacebookComments href="http://www.facebook.com"/>
                      </FacebookProvider>
                    </span>
                  </div>
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
