import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './searchBar';

import config from '../../config.json';
const API_KEY = config.key;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'basket case'}, (videos) => {
			this.setState({ videos });
		});
	}

  	render() {
    	return (
    		<div>
      			<div>React Video Player</div>
      			<SearchBar />
      		</div>
    	);
  	}
}
