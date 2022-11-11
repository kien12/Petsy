import React from 'react';
import { Link } from 'react-router-dom'

class CategoryNav extends React.Component {
  constructor(props){
    super(props)
  }
componentDidMount() {
  this.props.fetchAllCategories();
}
  render() {
    const categoriesList = this.props.categories.map(category => (
      <Link
        key={`${category.name}-${category.id}`}
        to={`/categories/${category.id}`}
        > 
        {category.name}
        
      </Link>
      ))
    return (
      <div className='categories-nav'>
        {categoriesList}
      </div>
    )
  }
}


export default CategoryNav;