import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])

    const addItem = (item, quantity) => {
        
            if (isInCart(item.id)) {
                setCartList(cartList.map( producto => {
                return producto.id === item.id ? {...producto,quantity:producto.quantity+quantity}:producto}))
            }else {
                setCartList([...cartList, {...item,quantity}])
            }
        }
        const isInCart = (id) => {
            return cartList.find(products => products.id === id ) ? true:false
        }
        const clear = () => {
            setCartList([])
        }
        const remove = (id) => setCartList(cartList.filter(products => products.id !== id))

        const totalCompra=()=>{
            return cartList.reduce((val, carrito)=> val + (carrito.precio*carrito.stock),0)
        }

    return(
        <>
             <CartContext.Provider value={{cartList, addItem, remove, clear, isInCart, totalCompra}}>
                {children}
             </CartContext.Provider>
        
        </>
    )
}

export default CartContextProvider