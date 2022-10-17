import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContenedorHome from '../containers/contenedorHome';
import Categorias from '../components/categorias';
import Cart from '../components/cart';
import CartContextProvider from '../components/cartContext';
import ProductsDetailsConteiner from '../components/ItemDetails/productsDetailsConteiner';


const Home = () => {
  return (
    <>  
        <CartContextProvider> 
          <BrowserRouter>
            <Navbar />
            
            <Routes>
            
            <Route path='/' element={<ContenedorHome />} />

            <Route path='/item/:id' element={<ProductsDetailsConteiner />} />

            <Route path='/category/:id' element={<Categorias />} /> 
            
            <Route path='/cart' element={<Cart />} />
          </Routes>
            
          
          </BrowserRouter>
          </CartContextProvider>
        <Footer />
    </>
  );
}

export default Home
