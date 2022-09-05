import './App.css'
import Navbar from './components/navbar';
import Cards from './containers/cards';
import Ubicacion from './components/ubicacion';

const App = () => {
  return (
    <>  
        <Navbar />
        <Cards />
        <Ubicacion />
    </>
  );
}

export default App
