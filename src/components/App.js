import React from 'react';
import './App.css';
import Sound from 'react-sound';

export default class MyComponentWithSound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: 'http://176.9.36.203:8000/vocaltrance_256',
      playStatus: 'PLAYING',
      volume: 100
    }
  }

  render() {
    return <Sound url={this.state.currentTrack} playStatus={this.state.playStatus} volume={this.state.volume}
                  onPlaying={({position}) => this.setState({position})}/>

  }
};
