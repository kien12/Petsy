import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CategoryProductShowPageContainer from './category/category_products_showpage_container'
import ProductShowPageContainer from './product/product_showpage_container';
import GlobalNavBarContainer from './navbar/global_navbar_container';
import ModalContainer from './modal/modal_container';
import Splash from './splash/splash';

const App = () => {
  return (
    <div>
      <ModalContainer/>
        <GlobalNavBarContainer/>
      <Switch>
        <Route exact path="/" component={Splash}/>
        <Route exact path="/categories/:id" component={CategoryProductShowPageContainer} />
        <Route exact path="/products/:id" component={ProductShowPageContainer} />
      </Switch>
    </div>
  )
}

export default App;