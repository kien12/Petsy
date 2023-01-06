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
    console.log("category products props", this.props)
    // console.log('photourl', this.props.categoryProducts[0]);


    const categoryProducts = this.props.categoryProducts.map(product => (
    <div 
      className='product-info-container'
      key={`${product.name}-${product.id}`}>
      <Link to={`/products/${product.id}`}>
        <img src={product.photoUrls[0]} className='category-product-image'/>
        <h2 className ='category-product-name'>{product.name}</h2>
        {/* <p className='category-product-description'>{product.description}</p> */}
        <p className ='category-product-price'>{product.price}</p>
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