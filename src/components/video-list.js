import React, { Component } from 'react';

class VideoList extends Component {
	render(){
		let list = this.props.videos.map(video => {
			return (

				<li key={video.etag} className="list-group-item" onClick={(event) => {this.props.onListClick(video);}}>
				<div className="row">
				<div className="col-md-5">
				<img src={video.snippet.thumbnails.default.url}/>
				</div>
				<div className="col-md-7">
				<p>{video.snippet.title}</p>
				</div>
				</div>
				</li>
				);
		});
		return (
			<div className="col-md-4">
			<ol className="list-group">{list}</ol></div>
			);
	}
}

export default VideoList;