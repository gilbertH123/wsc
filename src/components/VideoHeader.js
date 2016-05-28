import React from 'react';

export default class VideoHeader extends React.Component {
    
    render() {
        
        return (
            <div id="header-layout">
                <div id="bigHeader">WSC PLAYER TEST</div>
                <div id="smallHeader"><i>by {this.props.Username}</i></div>
             </div>
        );
    }
}