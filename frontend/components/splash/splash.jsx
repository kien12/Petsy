import React from 'react';
import ProductIndexItem from '../product/product_index_item';
import Footer from './footer';
// import { fetchAllProducts } from '../../actions/product_actions';
// import HeroBannerContainer from './hero_banner_container'


class Splash extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchAllProducts();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.products.length !== prevProps.products.length) {
      this.forceUpdate();
    }
  }
  
  
  render() {
    const products = this.props.products;

    const productItems = products.map((product) => {
      return <ProductIndexItem key={product.id} product={product} />;
    });

    console.log('splash props', this.props);



    return (
      <div className="product-index-container">
        <div className="top-picks">
          <div className="top-picks-title">
            <p>Our top picks for you!</p>
          </div>
          <div className="top-picks-products">
            <div className="individual-pick">{productItems[0]}</div>
            <div className="individual-pick">{productItems[1]}</div>
            <div className="individual-pick">{productItems[2]}</div>
            <div className="individual-pick">{productItems[1]}</div>
            <div className="individual-pick">{productItems[1]}</div>
            <div className="individual-pick">{productItems[1]}</div>
            <div className="individual-pick">{productItems[1]}</div>
            <div className="individual-pick">{productItems[1]}</div>
            <div className="individual-pick">{productItems[1]}</div>
            <div className="individual-pick">{productItems[1]}</div>
          </div>
        </div>
        <div className="nature-photography">
          <div className="nature-category">
            <div className="nature-text">
              <p className="nature-landscape">
                Nature <span>&</span> <span>Landscape</span>
              </p>
              <p className="zen">
                Pick your <span>zen moment</span>
              </p>
            </div>

            <div className="nature-products">
              <div>{productItems[1]}</div>
              <div>{productItems[1]}</div>
              <div>{productItems[1]}</div>
              <div>{productItems[1]}</div>
              <div>{productItems[1]}</div>
              <div>{productItems[1]}</div>
            </div>
          </div>
        </div>
        <div className="editors-pick-container">
          <p className="editor">Shop Editor's Pick</p>
          <div className="editor-pick">
            <div className="span-row-2">{productItems[1]}</div>
            <div>{productItems[1]}</div>
            <div>{productItems[1]}</div>
            <div>{productItems[1]}</div>
            <div>{productItems[1]}</div>
            <div>{productItems[1]}</div>
            <div>{productItems[1]}</div>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>

    );
  }
}

export default Splash;