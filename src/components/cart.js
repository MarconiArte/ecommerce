import { CartContext } from "./cartContext"
import { useContext} from "react"
import { Link } from "react-router-dom"

const Cart = () => {
    

    const {cartList, addItem, remove, clear} = useContext(CartContext)
    
    return(
        <>
            <div className="conteiner-comprar">
                <button className="boton" onClick={clear}>Limpiar carrito</button>
                {
                    cartList.length === 0 ? 
                    <div>
                        <Link to={"/"}><button className="boton">Seguir comprando</button></Link>
                        <p>Carrito vacio mi pana</p> 
                    </div>:
                    <div>
                        {cartList.map(item => 
                            
                            <div key={item.id}>
                                <img src={item.imagen} />
                                <div className="product-nombre">{item.nombre}</div>
                                <div className="product-precio">{item.precio}</div>
                            </div>
                            
                            )}
                    </div>
                
                }
            </div>
        </>
    )
}

export default Cart;