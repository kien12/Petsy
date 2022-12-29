
import React from "react";
import { Link } from "react-router-dom";

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <div key={product.id} className="top-picks-image-container">
        <Link to={`products/${product.id}`}>
          <img src={product.photoUrls[0]} className="top-picks-image" />
        </Link>
        <div className="product-price-pill">
          <p className="product-price">${product.price}</p>
        </div>
      </div>
    );
  }
}

export default ProductIndexItem;