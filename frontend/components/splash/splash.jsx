import React from 'react';
import ProductIndexItem from '../product/product_index_item';
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
    const products = this.props.products


    const productItems = products.map((product) => {
      return <ProductIndexItem key={product.id} product={product} />;
    });



    return (
      <div className="product-index-container">
        <div className="top-picks">
          <div className="top-picks-title">
            <p>Our picks for you</p>
          </div>
          <div className="top-picks-products">
            <div className="individual-pick">{productItems[0]}</div>
            <div className="individual-pick">{productItems[1]}</div>
            <div className="individual-pick">{productItems[2]}</div>
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
      </div>
    );
  }
}





      // console.log('splash props', this.props);
      // console.log('splash state', this.state)
      // console.log('splash products', products[0])
        
        
    // const test = products.map((product) => (
    //  <img src={product.photoUrls[0]} alt="" />
    // ))

    //  const test = products.map((product) => (
    //  <img src={product.photoUrls[0]} alt="" />
    // ))
    
  //   if (!this.props.products.length !== 1) {
  //     return null;
  //   } else {
      
  //   const testIds = [1, 1, 2];
  //   const test = testIds.map(id => (
  //     <div>
  //       <img src={this.props.products[id].photoUrls[0]}/>
  //     </div>
  //   ));
  // }
   
   
   
      
    // const testIds = [1, 1, 2];
    // const test = testIds.map(id => (
    //   <div>
    //     <img src={this.props.products[id].photoUrls[0]}/>
    //   </div>
    // ));
//     const productItems = products.map((product) => {
//       return <ProductIndexItem key={product.id} product={product} />;
//     });

//     return (
//       <div>
//         <div>
//           <div className='ketsy-welcome'>
//             {/* Capture your moment on the wall! */}
//           {test}
//           </div>
//         </div>
//         <div className='top-picks-container'>
//           <p className='ketsy-welcome'> Our top picks for you</p>
          
//         </div>
//       </div>
//     )
//   }
 


export default Splash;