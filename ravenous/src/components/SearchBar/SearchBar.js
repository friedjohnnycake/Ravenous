import React from 'react';
import "./SearchBar.css";



class SearchBar extends React.Component {
  constructor(props){
    super(props);
   
    this.state = {
        term: " ",
        location: " ",
        sortBy: 'best_match'
    } ;
    
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
      };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this)
  }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
          let sortByOptionValue = this.sortByOptions[sortByOption];
        return <li key={sortByOptionValue} 
                   className={this.getSortByClass(sortByOptionValue)}
                   onClick = {this.handleSortByChange.bind(this, this.handleSortByChange)}>
                  {sortByOption}
               </li>
        });
    }

    getSortByClass(sortByOptions){
          if(this.state.sortBy === this.sortByOption){
            return 'active'
          }else{
            return ' '
          };
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption})
    }

    handleTermChange(event) {
        this.setState({term: event.target.value})
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value})
    }

    handleSearch() {
      
    }

    render() {
        return <div searchYelp={this.searchYelp} className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    }
}

export default SearchBar;