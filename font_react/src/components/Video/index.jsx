import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <div>
        <h2>{this.props.video_name}</h2>
        <ReactPlayer width="100%" url={this.props.video_url} controls/>
        <p>
          {this.props.video_intro}
        </p>
      </div>
      )
  }
}
export default App