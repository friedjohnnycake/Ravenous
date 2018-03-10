import React, { Component } from 'react';
import "./SearchBar.css";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        term: " ",
        location: " ",
        sortBy: 'best_match'
    };
    
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

    renderSortByOptions = () => Object
      .keys(this.sortByOptions)
      .map(sortByOption => {
        let sortByOptionValue = this.sortByOptions[sortByOption];
        return (
          <li
            key={sortByOptionValue} 
            className={this.getSortByClass(sortByOptionValue)}
            onClick = {() => this.setSortBy(sortByOptionValue)}
          >
            {sortByOption}
          </li>
        );
      });

    getSortByClass = sortByOption => this.state.sortBy === sortByOption ? 'active' : '';
    setSortBy = sortByOption => this.setState({sortBy: sortByOption})
    handleTermChange = event => this.setState({term: event.target.value})
    handleLocationChange = event => this.setState({location: event.target.value})
    handleSearch = event => {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      event.preventDefault()
    }

    render = () => (
      <div className="search-bar">
        <div className="search-bar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="search-bar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="search-bar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
}
