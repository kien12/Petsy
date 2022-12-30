import React from 'react';
import ProductIndexItem from '../product/product_index_item';
import Footer from './footer';
import About from './about';


class Splash extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchAllProducts();
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
            <div className="individual-pick">{productItems[3]}</div>
            <div className="individual-pick">{productItems[4]}</div>
            <div className="individual-pick">{productItems[5]}</div>
            <div className="individual-pick">{productItems[6]}</div>
            <div className="individual-pick">{productItems[7]}</div>
            <div className="individual-pick">{productItems[8]}</div>
            <div className="individual-pick">{productItems[9]}</div>
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
              <div>{productItems[10]}</div>
              <div>{productItems[11]}</div>
              <div>{productItems[12]}</div>
              <div>{productItems[13]}</div>
              <div>{productItems[14]}</div>
              <div>{productItems[15]}</div>
            </div>
          </div>
        </div>
        <div className="editors-pick-container">
          <p className="editor">Shop Editor's Pick</p>
          <div className="editor-pick">
            {/* <div className="span-row-2"><img src={window.street12} className='top-picks-image' alt="" /></div> */}
            <div className="span-row-2">{productItems[16]}</div>
            <div>{productItems[17]}</div>
            <div>{productItems[18]}</div>
            <div>{productItems[19]}</div>
            <div>{productItems[20]}</div>
            <div>{productItems[21]}</div>
            <div>{productItems[22]}</div>
          </div>
        </div>
        <div>
          <About/>
          <Footer/>
        </div>
      </div>

    );
  }
}

export default Splash;