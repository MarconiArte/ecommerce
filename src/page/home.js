import Navbar from '../components/navbar';
import Comprar from '../page/comprar';
import Footer from '../components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

          <Route path='/contacto' element={<Contacto />} />

          <Route path='/comprar/:id' element={<Comprar />} />

          <Route path='/category/:id' element={<Categorias />} /> 

          <Route path='/category' element={<Categorias />} />
        </Routes>
          
        
        </BrowserRouter>
  
        <Footer />
    </>
  );
}

export default Home
