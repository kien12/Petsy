import { connect } from "react-redux";
import { fetchAllProducts } from "../../actions/product_actions";
import { withRouter } from "react-router";
import ProductIndex from "./product_index";

const mSTP = (state) => ({
  products: Object.values(state.entities.products)
});

const mDTP = (dispatch) => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default withRouter(connect(mSTP, mDTP)(ProductIndex));