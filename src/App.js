import './App.css'
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './components/cartContext';
import ItemContainer from './components/itemContainer/ItemContainerList'
import ProductsDetailsConteiner from './components/ItemDetails/productsDetailsConteiner';
import Cart from './components/cart';


const App = () => {
  return (
    <CartContextProvider> 
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<ItemContainer/>} />
        <Route path='/category/:id' element={<ItemContainer/>} /> 
        <Route path='/item/:id' element={<ProductsDetailsConteiner />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
      <Footer />
      </CartContextProvider>
    
  );
}

export default App
