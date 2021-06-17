import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './containers/ItemListContainer';
import { Home } from './containers/Home';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <ItemListContainer />
    </div>
  );
}

export default App;
