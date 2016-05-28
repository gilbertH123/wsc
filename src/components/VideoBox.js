import React from 'react';
import VideoHeader from './VideoHeader';
import VideoControl from './VideoControl';
import jQuery from 'jquery';

export default class VideoBox extends React.Component {

    constructor () {
        super();

        this.state = {
            videos : [],
            videoUrlNumber : 0
        };
    }

    componentWillMount () {
        this.FetchVideos();
    }

    render() {
        const topVideos = this.GetFiveRatingVideos();
        return (
            <div id="video-box-layout">
                <VideoHeader Username="Gil Ganel"/>
                <VideoControl NumberOfVideos={topVideos.length} SetVideoUrl={this.SetVideoUrl.bind(this)}
                              VideoUrl={topVideos[this.state.videoUrlNumber]}/>
            </div>
        );
    }
    
    FetchVideos() {
        jQuery.ajax({
            url: 'http://serverus.clipro.tv/TrialApi/clips/searchTrialClips',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            data: "{ count: 20 }",
            success: (videos) => {
                this.setState({ videos : videos.clips});
            }
        });
    }

    GetFiveRatingVideos() {
        var linksArray = []
        var filteredVideos = this.state.videos.filter((video) => {
           return video.rating == 5;
        });
        // TODO: find a way to retrive the linkUrl while filtering
        for (var i = 0; i < filteredVideos.length; i++) {
            linksArray.push(filteredVideos[i].linkUrl);
        }
        
        return linksArray;
    }
    
    SetVideoUrl(numericUpDown) {
        this.setState({videoUrlNumber : this.state.videoUrlNumber + numericUpDown});
    }
}
