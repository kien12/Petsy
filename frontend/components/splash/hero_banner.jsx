import React from 'react'
import { Link } from 'react-router-dom';

class HeroBanner extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }


  render() {
    // console.log('herobanner state', this.state)
    console.log('herobanner props', this.props)
    const bannerImages = [window.street, window.landscape, window.blackWhite, window.modern, window.paint, window.canvas];

    const categoriesList = this.props.categories.map( (category, idx) => (
      <Link
      key={`${category.name}-${category.id}`}
      to={`/categories/${category.id}`}
      className='category-list-link'
      >
      <img src={bannerImages[idx]}  className='hero-circle-image'/>
      {category.name}
      </Link>
    ))
    

    return (
      <div className='category-list-container'>
        {categoriesList}
      </div>
      
     
    )
  }
}

export default HeroBanner;




 // <div className='hero-block-upper-container'>
      //   <div className='hero-block-large'>
      //     <h2 className='hero-moto'>
      //       Standing out just got so easy.
      //       <p className='sell-on-ketsy'>
      //         sell on Ketsy!
      //       </p>
      //     </h2>
      //     <img src={window.splashImage3} className='hero-main-image' />
      //   </div>
      //   <div className='hero-right-container'>
      //     <img src={window.splashImage4} className="hero-image-medium"/>
      //     <div className='hero-right-main-text'>
      //       #1 product
      //       <p className='hero-right-tiny-text'>
      //         idk to put here
      //       </p>
      //     </div>
      //     <p className='hero-shipping'>
      //       Free Shipping on everything!
      //     </p>
      //   </div>
      // </div>