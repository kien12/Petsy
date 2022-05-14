import React from 'react';
import { Link } from 'react-router-dom'

class CategoryNav extends React.Component {
  constructor(props){
    super(props)
    // console.log('Render Constructor')
  }
componentDidMount() {
  this.props.fetchAllCategories();
  // console.log('componentDidMount');
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
    // console.log('render')
    // console.log(this.props);
    return (
      <div className='categories-nav'>
        {categoriesList}
      </div>
    )
  }
}


export default CategoryNav;