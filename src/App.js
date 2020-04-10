import React,{ Component } from 'react';
import Header from './component/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import Page2 from './component/page2';


import {BrowserRouter , Route , Switch } from 'react-router-dom';

class App extends Component {

    render(){
      return(
        <BrowserRouter>
          <main>
            
            <Header/>
            
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/products' component={Products} />
              <Route path='/page2' component={Page2} />
              <Route path='/product/:product_id' component={Product} />
            </Switch>

          </main> 
        </BrowserRouter>   
      )
  }
}

export default App;
