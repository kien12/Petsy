import React from 'react';
import CategoryNavContainer from './category/category_nav_container'
import {Switch, Route} from 'react-router-dom';
import CategoryProductShowPageContainer from './category/category_products_showpage_container'
import ProductShowPageContainer from './product/product_showpage_container';
import GlobalNavBarContainer from './navbar/global_navbar_container';
import ModalContainer from './modal/modal_container';

const App = () => {
  return (
    <div>
      <ModalContainer/>
        <GlobalNavBarContainer/>
        {/* <CategoryNavContainer/> */}
      <Switch>
        <Route exact path="/categories/:id" component={CategoryProductShowPageContainer} />
        <Route exact path="/products/:id" component={ProductShowPageContainer} />
      </Switch>
    </div>
  )
}

export default App;