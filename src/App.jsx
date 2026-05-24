import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HomeContainer } from './containers/HomeContainer';
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { HowToBuyContainer } from './containers/HowToBuyContainer';
import { ContactContainer } from './containers/ContactContainer';
import { CartContainer } from './containers/CartContainer';
import { ProductsComponentContext } from './contexts/ProductsContext';
import { CartComponentContext } from './contexts/CartContext';
import './App.css';

const basename = import.meta.env.PROD ? '/trueSize-store' : '/';

function App() {
  return (
    <div className="App">
      <CartComponentContext>
        <ProductsComponentContext>
          <BrowserRouter basename={basename}>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/productos/:brand" element={<ItemListContainer />} />
              <Route path="/producto/:id" element={<ItemDetailContainer />} />
              <Route path="/como-comprar" element={<HowToBuyContainer />} />
              <Route path="/contacto" element={<ContactContainer />} />
              <Route path="/carrito" element={<CartContainer />} />
              <Route path="*" element={<h1>Error: 404</h1>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProductsComponentContext>
      </CartComponentContext>
    </div>
  );
}

export default App;
