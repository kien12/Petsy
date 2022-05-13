import React from 'react';
import { render } from 'react-dom';

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
      <div key={`${category.name}-${category.id}`}> 
        {category.name}
      </div>
      ))
    // console.log('render')
    // console.log(this.props);
    return (
      <div className='categories-nav'>
        <h1>category_navbar</h1>
        {categoriesList}
      </div>
    )
  }
}


export default CategoryNav;