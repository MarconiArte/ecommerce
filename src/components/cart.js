import { CartContext } from "./cartContext"
import { useContext} from "react"
import { Link } from "react-router-dom"

const Cart = () => {
    

    const {cartList, addItem, remove, clear} = useContext(CartContext)
    
    return(
        <>
            <h2>Soy el carrito </h2>
            <button onClick={clear}>Limpiar carrito</button>
            {
                cartList.length === 0 ? 
                <div>
                    <Link to={"/"}><button>Seguir comprando</button></Link>
                    <p>Carrito vacio mi pana</p> 
                </div>:
                <div>
                    {cartList.map(item => 
                        
                        <div key={item.id}>
                            <img src={item.imagen} />
                            <div>{item.nombre}</div>
                            <div>{item.precio}</div>
                        </div>
                           
                        )}
                </div> 
            }
        </>
    )
}

export default Cart;