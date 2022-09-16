import Navbar from '../components/navbar';
import Cards from '../containers/cards';
import Comprar from '../page/comprar';
import Ubicacion from '../components/ubicacion';
import Footer from '../components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <>  
        <BrowserRouter>
          <Navbar />

        <div className="conteiner-card">
          <Cards />
        </div>
          
        <Routes>
          
          <Route path='/' element={<Ubicacion />} />

          <Route path='/comprar/:id' element={<Comprar />} />
        </Routes>
          
        
        </BrowserRouter>
  
        <Footer />
    </>
  );
}

export default Home
