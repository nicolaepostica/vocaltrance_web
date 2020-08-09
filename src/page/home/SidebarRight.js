import React from "react";
import channel_info_static from "../../resources/channel-info-static";
import Spinner from "../../components/spinner";
import {Consumer} from "../../components/context";

const SidebarRight = () => (
  <Consumer>
    {
      ({data, loading_channel_data}) => {
        return (
          <div className="col m12 l4  qw-sidebar-right" id="qwSidebarContainer">
            {data.map((item, index) => (
              <aside key={`icecast-widget-${index}`} className="widget icecaststatus">
                <h4 className="qw-widget-title">{channel_info_static[item.key].block_name}</h4>
                <div className="paper z-depth-1">
                  <div className="content">
                    {loading_channel_data ? <Spinner/> : item.channel_info.map((channel, c_index) => (
                      <div key={`${item.key}-${channel.bitrate}`}>
                        <strong>{`${channel_info_static[item.key].channel_name} ${channel.bitrate}`}</strong><br/>
                        <a href={`${channel_info_static[item.key].url}${channel.bitrate}.m3u`}>{item.track_title}</a>
                        <br/>Listeners Connected: {channel.listener}<br/>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            ))}
          </div>
        )
      }
    }
  </Consumer>

);

export {SidebarRight};
