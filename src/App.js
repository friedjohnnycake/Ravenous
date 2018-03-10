import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Yelp from './helpers/Yelp';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
  }

  searchYelp = (term, location, sortBy) =>
    Yelp
    .search(term, location, sortBy)
    .then(businesses => this.setState({businesses: businesses}));
  
 
  render = () => (
    <div className="app">
      <h1>ravenous</h1>
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList businesses={this.state.businesses} />
    </div>
  );
}
