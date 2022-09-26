import Navbar from '../components/navbar';
import Cards from '../containers/cards';
import Comprar from '../page/comprar';
import Ubicacion from '../components/ubicacion';
import Footer from '../components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productos from './productos';
import Contacto from './contacto';
import ContenedorHome from '../containers/contenedorHome';
import Categorias from '../components/categorias';

const Home = () => {
  return (
    <>  
        <BrowserRouter>
          <Navbar />

        <Routes>
          
          <Route path='/' element={<ContenedorHome />} />

          <Route path='/productos' element={<Productos />} />

          <Route path='/contacto' element={<Contacto />} />

          <Route path='/comprar/:id' element={<Comprar />} />

          <Route path='/category/:id' element={<Categorias />} /> 
        </Routes>
          
        
        </BrowserRouter>
  
        <Footer />
    </>
  );
}

export default Home
