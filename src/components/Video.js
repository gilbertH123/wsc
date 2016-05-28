import React from 'react';

export default class Video extends React.Component {

    constructor() {
        super();
    }


    render() {
        return (
            <video ref="videoRef"  src={this.props.VideoUrl} type="video/mp4" 
                   onEnded={this.HandleEndedVideo.bind(this)}>
            </video>
        );
    }
    
    playVideo() {
        this.refs.videoRef.play();
    }

    pauseVideo() {
        this.refs.videoRef.pause();
    }

    HandleEndedVideo() {
        this.props.SetVideoState("ENDED");
    }
}
