import React from 'react';

export default class VideoButtons extends React.Component {

    constructor () {
        super();

        this.state = {
            videoNumber: 1,
            videoState: "PAUSE",
            prevAvailable : false,
            nextAvailable : true,
            selected : false
        }
    }

    render() {
        return (
            <div id="control-layout">
                <div id="videoHeader">
                    VIDEO {this.ShowVideoNumber()}
                </div>
                <div className="centring">
                    <div className="control-button">
                        <button onClick={this.HandlePrevClick.bind(this)} id="btn-prev"
                                disabled={!this.state.prevAvailable}>PREVIOUS</button>
                        <button className= { this.state.selected ? 'selected ' : 'unselected' } id="btn-play"
                                onClick={this.HandleVideoStateClick.bind(this)} >{this.SetPlayPauseBtnName()}</button>
                        <button onClick={this.HandleNextClick.bind(this)} id="btn-next"
                                disabled={!this.state.nextAvailable}>NEXT</button>
                    </div>
                    <div id="bg-button">
                    </div>
                </div>
            </div>
        );
    }

    HandleVideoStateClick () {
        if (this.state.videoState === "PLAY") {
            this.setState({videoState : "PAUSE", selected:false});
        } else {
            this.setState({videoState : "PLAY", selected : true});
        }

        this.props.SetVideoState(this.state.videoState);
    }

    ShowVideoNumber () {
        var videoNumber = this.state.videoNumber;

        if (videoNumber < 10) {
            return "0" + videoNumber;
        } else {
            return "" + videoNumber;
        }
    }

    HandlePrevClick () {
        this.setState({videoNumber: this.state.videoNumber -1 , videoState: "PAUSE", selected : false});

        if (this.state.videoNumber === 2) {
            this.setState({prevAvailable : false});
        }

        if (this.state.nextAvailable === false) {
            this.setState({nextAvailable : true});
        }

        this.props.ChangeToNextOrPrevVideo(-1);
    }

    HandleNextClick () {
        this.setState({videoNumber: this.state.videoNumber + 1, videoState: "PAUSE", selected : false});

        if (this.state.videoNumber === this.props.NumberOfVideos - 1) {
            this.setState({nextAvailable : false});
        }

        if (this.state.prevAvailable === false) {
            this.setState({prevAvailable : true});
        }

        this.props.ChangeToNextOrPrevVideo(1);
    }


    SetPlayPauseBtnName() {
        return this.state.videoState === "PLAY" ? "PAUSE" : "PLAY";
    }
}