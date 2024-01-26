import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/navBar/index';
import { Footer } from './components/Footer';
import { HomeContainer } from './containers/HomeContainer';
import { ItemListContainer } from './containers/ItemListContainer'
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { HowToBuyContainer } from './containers/HowToBuyContainer';
import { ContactContainer } from './containers/ContactContainer';
import { CartContainer } from './containers/CartContainer';
import { ProductsComponentContext } from './contexts/ProductsContext';
import { CartComponentContext } from './contexts/CartContext';
import './App.css';

function App() {
  return (
    <div className='App'>
      <CartComponentContext>
        <ProductsComponentContext>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path='/' component={HomeContainer} />
              <Route path='/productos/:brand' component={ItemListContainer} />
              <Route path='/producto/:id' component={ItemDetailContainer} />
              <Route path='/como-comprar' component={HowToBuyContainer} />
              <Route path='/contacto' component={ContactContainer} />
              <Route path='/carrito' component={CartContainer} />
              <Route path='*' component={() => <h1>Error: 404</h1>} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </ProductsComponentContext>
      </CartComponentContext>
    </div>
  );
};

export default App;
