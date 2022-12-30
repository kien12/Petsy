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
            {/* <div className="individual-pick"><img src={window.misq1} className='top-picks-image' /></div> */}
            <div className="individual-pick"><img src={window.nature11} className='top-picks-image' /></div>
            <div className="individual-pick"><img src={window.blackwhite1} className='top-picks-image' /></div>
            <div className="individual-pick"><img src={window.street1} className='top-picks-image' /></div>
              <div className="individual-pick"><img src={window.nature9} className='top-picks-image' /></div>
            {/* <div className="individual-pick"><img src={window.misq4} className='top-picks-image' /></div> */}
            <div className="individual-pick"><img src={window.blackwhite2} className='top-picks-image' /></div>
            <div className="individual-pick"><img src={window.street2} className='top-picks-image' /></div>
              <div className="individual-pick"><img src={window.nature8} className='top-picks-image' /></div>
            {/* remove bottom one  */}
            <div className="individual-pick"><img src={window.nature10} className='top-picks-image' /></div> 
              <div className="individual-pick"><img src={window.misq2} className='top-picks-image' /></div>
              <div className="individual-pick"><img src={window.nature7} className='top-picks-image' /></div>
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
              {/* <div><img src={window.nature1} className='top-picks-image' /></div> */}
              <div><img src={window.nature2} className='top-picks-image' /></div>
              <div><img src={window.nature12} className='top-picks-image' /></div>
              <div><img src={window.nature3} className='top-picks-image' /></div>
              <div><img src={window.nature4} className='top-picks-image' /></div>
              <div><img src={window.nature5} className='top-picks-image' /></div>
              <div><img src={window.nature6} className='top-picks-image' /></div>

            </div>
          </div>
        </div>
        <div className="editors-pick-container">
          <p className="editor">Shop Editor's Pick</p>
          <div className="editor-pick">
            {/* <div className="span-row-2"><img src={window.street12} className='top-picks-image' alt="" /></div> */}
            <div className="span-row-2"><img src={window.nature13} className='top-picks-image' alt="" /></div>
            <div><img src={window.street4} className='top-picks-image' alt="" /></div>
            <div><img src={window.street5} className='top-picks-image' alt="" /></div>
            {/* <div><img src={window.street6} className='top-picks-image' alt="" /></div> */}
            <div><img src={window.street7} className='top-picks-image' alt="" /></div>
            <div><img src={window.street11} className='top-picks-image' alt="" /></div>
            {/* <div><img src={window.street8} className='top-picks-image' alt="" /></div> */}
            <div><img src={window.street9} className='top-picks-image' alt="" /></div>
            <div><img src={window.street10} className='top-picks-image' alt="" /></div>
            {/* <div>{productItems[1]}</div>
            <div>{productItems[1]}</div>
            <div>{productItems[1]}</div>
            <div>{productItems[1]}</div>
            <div>{productItems[1]}</div> */}
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