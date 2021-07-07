import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HomeContainer } from './containers/HomeContainer';
import { ItemListContainer } from './containers/ItemListContainer'
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { HowToBuyContainer } from './containers/HowToBuyContainer';
import { ContactContainer } from './containers/ContactContainer';
import { CartContainer } from './containers/CartContainer';
import { ShopContext } from './contexts/ShopContext';

function App() {
  return (
    <div className="App">
      <ShopContext.Provider value={'nashe'}>
      <BrowserRouter>

        <NavBar />

        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route path='/productos/:categories' component={ItemListContainer} />
          <Route path='/producto' component={ItemDetailContainer} />
          <Route path='/como-comprar' component={HowToBuyContainer} />
          <Route path='/contacto' component={ContactContainer} />
          <Route path='/carrito' component={CartContainer} />
          <Route path='*' component={() => <h1>Error: 404</h1>} />
        </Switch>

        <Footer />

        </BrowserRouter>
      </ShopContext.Provider>
    </div>
  );
}

export default App;
