import React from 'react';
import Video from './Video';
import VideoButtons from './VideoButtons';

export default class VideoControl extends React.Component {

    constructor () {
        super();

        this.state = {
            videoState: "PAUSE",
            prevAvailable : false,
            nextAvailable : true
        }
    }

    render() {
        return (
            <div id="video-layout">
                <Video ref="VideoComponent" VideoUrl={this.props.VideoUrl}
                       SetVideoState={this.SetVideoState.bind(this)}/>
                <VideoButtons ref="VideoButtonsComponent" SetVideoState={this.SetVideoState.bind(this)}
                              ChangeToNextOrPrevVideo={this.ChangeToNextOrPrevVideo.bind(this)}
                              NumberOfVideos={this.props.NumberOfVideos}/>
            </div>
        );
    }

    SetVideoState (videoState) {
        if (videoState === "PLAY") {
            this.setState({videoState : "PAUSE"});
            this.refs.VideoComponent.pauseVideo();
        } else if (videoState === "PAUSE"){
            this.setState({videoState : "PLAY"});
            this.refs.VideoComponent.playVideo();
        } else {
            this.refs.VideoButtonsComponent.HandleVideoStateClick();
        }
    }

    
    ChangeToNextOrPrevVideo (numericUpDown) {
        this.props.SetVideoUrl(numericUpDown);
    }
}

