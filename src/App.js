import React from 'react'
import { Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Cart from './screen/Cart';
import HomePage from './screen/HomePage';
import Product from './screen/Product';
import Products from './screen/Products';



function App() {
  return (
    <div className="container">
      <NavBar/>
     
      <Route path='/' exact render={() => (<HomePage/>)} />
      <Route path='/products' exact  render={() => (<Products/>)} />
      <Route path='/cart' exact render={() => ( <Cart/>)} />
      <Route path='/products/:id' exact render={() => ( <Product/>)} />
     

    </div>
  );
}

export default App;
