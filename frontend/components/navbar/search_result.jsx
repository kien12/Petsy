import React from 'react';
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minPrice: '',
      maxPrice: '',
      queryStr: ''
    }
  }
  
  render() {
    return (
      <div>
         <input type="search"
              id="search"
              placeholder="Search for items or shops"
            />
      </div>
    )
  }

}

export default SearchResult;