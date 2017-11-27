import React, { Component } from 'react';

class VideoDetail extends Component {
	render(){
		if(!this.props.selectedVideo){
			return (<div>Loading videos</div>);
		}
		let videoUrl = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;
		return (
			<div className="col-md-8 well">
			<div className="panel panel-body">
			<div className="embed-responsive embed-responsive-16by9">
			<iframe className="embed-responsive-item"  src={videoUrl}></iframe>
			</div>
			</div>
			<div className="panel panel-heading">
			{this.props.selectedVideo.snippet.title}
			{this.props.selectedVideo.snippet.description}
			</div>
			</div>
			);
	}
}

export default VideoDetail;