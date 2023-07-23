import React from 'react';
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minPrice: '',
      maxPrice: '',
      queryStr: '',
      searchText: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange = (e) => {
    const value = e.target.value;
    this.setState({ searchText: value });
    // You can perform search operations or filter data here based on the value.
    // For demonstration purposes, I'll just log the search text to the console.
    console.log('Search Text:', value);
  };
  
  render() {
    return (
      <div>
         <input type="search"
              id="search"
              placeholder="Search for items or shops"
              value={this.state.searchText}
              onChange={this.handleSearchChange}
            />
      </div>
    )
  }

}

export default SearchResult;