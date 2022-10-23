import { Link} from "react-router-dom";
import BtnStock from "../../utils/btnStock"
import {useContext } from "react";
 import { CartContext } from '../../components/cartContext'

const ProductsDetails = ({detail}) =>{


    const { addItem, isInCart, remove} = useContext(CartContext)

    const onAdd = (quantity) =>{
        alert(`${quantity} productos se agregaron al carrito`)
        addItem(detail, quantity)
    }

    return(
       
        <div className="conteiner-comprar">
            <div className="contenedor-comprar-one">
                <h2 className="product-nombre">{detail.nombre}</h2>
               <img className="img-product" src={detail.imagen} alt="reference"/>
            </div>

            <div className="contenedor-comprar-two">
                <p className="product-ingredientes">{detail.ingredientes}</p>
                <p className="product-precio">${detail.precio}</p>
                        {
                            isInCart(detail.id) ? 
                            <div>
                                <p>hay algo en el carrito</p>
                                <button className="boton" onClick={() => remove(detail.id)}>remove</button>
                            </div>
                            : <p>Carrito vacio actualmente</p>
                        }
                        {
                            isInCart(detail.id) ? <Link to="/cart" style={{textDecoration: "none"}}><button className='boton'>Ir al carrito</button></Link>
                            : <BtnStock initial={detail.initial} stock={detail.stock} onAdd={onAdd} />
                        }

                    <Link to="/"><button className='boton'>Seguir comprando</button></Link>
            </div>

            <p>{detail.stock}</p>
            <p>{detail.initial}</p>
        </div>

        
    )

}


// ? <Link to="/cart" style={{textDecoration: "none"}}><button className='boton'>Ir al carrito</button></Link>
// :<BtnStock initial={1} stock ={5} onAdd={onAdd} /> 
export default ProductsDetails;