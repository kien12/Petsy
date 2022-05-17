import React from 'react';
import CategoryNavContainer from './category/category_nav_container'
import {Switch, Route} from 'react-router-dom';
import CategoryProductShowPageContainer from './category/category_products_showpage_container'

const App = () => {
  return (
    <div>
        <CategoryNavContainer/>
      <Switch>
        <Route exact path="/categories/:id" component={CategoryProductShowPageContainer} />
        <Route exact path="/products/:id" component={CategoryProductShowPageContainer} />
      </Switch>
    </div>
  )
}

export default App;