import React from 'react';
import CategoryNavContainer from './category/category_nav_container'
import {Switch, Route} from 'react-router-dom';
import CategoryShowPageContainer from './category/category_showpage_container'

const App = () => {
  return (
    <div>
        <CategoryNavContainer/>
      {/* <Switch> */}
        {/* <Route exact path="/categories/:id" component={CategoryShowPageContainer} /> */}
      {/* </Switch> */}
    </div>
  )
}

export default App;