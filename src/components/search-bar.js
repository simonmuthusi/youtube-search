import React, { Component } from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term:""}
	}
	searchVideo(term){
		this.setState({term:term});
		this.props.onSearchVideo(term);
	}
	render(){
		return (
			<div className="row search-row">
			<div className="col-md-10 mx-auto">
			<div className="search-bar"><input type="text" value={this.state.term} onChange={(event) => {this.searchVideo(event.target.value)}} className="form-control" placeholder="Enter search term" /></div>
			</div>
			</div>
			);
	}
}

export default SearchBar;