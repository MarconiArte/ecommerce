import Navbar from '../components/navbar';
import Comprar from '../page/comprar';
import Footer from '../components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './contacto';
import ContenedorHome from '../containers/contenedorHome';
import Categorias from '../components/categorias';
import Cart from '../components/cart';
import CartContextProvider from '../components/cartContext';


const Home = () => {
  return (
    <>  
        <CartContextProvider> 
          <BrowserRouter>
            <Navbar />
            
            <Routes>
            
            <Route path='/' element={<ContenedorHome />} />

            <Route path='/contacto' element={<Contacto />} />

            <Route path='/comprar/:id' element={<Comprar />} />

            <Route path='/category/:id' element={<Categorias />} /> 

            <Route path='/category' element={<Categorias />} />
            
            <Route path='/cart' element={<Cart />} />
          </Routes>
            
          
          </BrowserRouter>
          </CartContextProvider>
        <Footer />
    </>
  );
}

export default Home
