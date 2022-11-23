import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: ''
    }

  }

  handleSubmit() {
    const { searchInput } = this.state;
    this.setState({ searchInput: ""});
    this.props.history.push({ pathname: '/search'})
  }

  handleInput(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    return (
      <div className='searchbar-container'>
        <form className="top-nav-bar-search-bar" onSubmit={this.handleSubmit}>
          <input type="search" placeholder='Search for items or shops' onChange={this.handleInput("searchInput")}/>
          <button className='search-logo'></button>
        </form> 
      </div>
    )
  }
}

export default SearchBar;