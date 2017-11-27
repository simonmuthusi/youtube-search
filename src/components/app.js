import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';

import YTSearch from 'youtube-api-search';

import SearchBar from './search-bar';
import VideoList from './video-list';
import VideoDetail from './video-detail';

const API_KEY = "AIzaSyBOvZayhAcM_PKC5__7IQj-C9Vij_Yg9ng";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {term:"", videos:[], selectedVideo:null}
    this.searchVideo();
  }
  searchVideo(term){
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({videos:videos, selectedVideo:videos[0]});
    });
  }
  render() {
    return (
      <div className="container col-md-10">
      <div>
        <SearchBar onSearchVideo={(term) => { this.searchVideo(term)}}/>
        <div className="row">
        <VideoList videos={this.state.videos} onListClick={(video)=>{this.setState({selectedVideo:video});}}/>
        <VideoDetail selectedVideo={this.state.selectedVideo}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
