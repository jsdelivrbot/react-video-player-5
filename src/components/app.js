import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './searchBar';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

import config from '../../config.json';
const API_KEY = config.key;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('basket case');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});
	}

  	render() {
  		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 350);
    	return (
    		<div>
      			<div className={"header"}>React Video Player</div>
      			<SearchBar onVideoSearch={videoSearch} />
      			<VideoDetail video={this.state.selectedVideo} />
      			<VideoList 
      				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      				videos={this.state.videos} 
      			/>
      		</div>
    	);
  	}
}
