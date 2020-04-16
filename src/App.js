import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/checkout/checkout';

import {Route, Switch} from 'react-router-dom';
import ContactData from './containers/checkout/contactData';


class App extends Component {
  render () {
    return (
      <div>
        <Layout>
         <Switch>
         <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" exact component={CheckOut} />
          <Route path="/checkout/contact" exact component={ContactData} />
         </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
