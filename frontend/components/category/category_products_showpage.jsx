import React from 'react';
import { Link } from 'react-router-dom';

class CategoryProductShowPage extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.fetchCategoryProducts(this.props.match.params.id);
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps){
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchCategoryProducts(this.props.match.params.id)
    }
  }
  
  render(){
    const categoryProducts = this.props.categoryProducts.map(product => (
    <div className='product-info-container'>
      <Link
        key={`${product.name}-${product.id}`}
        to={`/products/${product.id}`}
      >
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </Link>
    </div>
    ));
    
    

    return (
      <div className='category-products-container'>
        {categoryProducts}
      </div>
    )
  }

}

export default CategoryProductShowPage;