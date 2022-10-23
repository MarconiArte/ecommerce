import { Link} from "react-router-dom";
import ItemCount from "../../utils/itemCount"
import {useContext } from "react";
import { CartContext } from '../../components/cartContext'
import Swal from "sweetalert2";
 

const ProductsDetails = ({detail}) =>{


    const { addItem, isInCart, remove} = useContext(CartContext)

    const onAdd = (quantity) =>{
        Swal.fire({
            title: 'Tu producto se agrego al carrito correctamente',
            color:'black',
            background:'pink',
            confirmButtonColor: "pink",
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
        addItem(detail, quantity)
    }

    return(
       
        <div className="conteiner-comprar">
            <div className="contenedor-comprar-one">
                <h2 className="product-nombre">{detail.nombre}</h2>
               <img className="img-product" src={detail.imagen} alt="Imagen del producto"/>
            </div>

            <div className="contenedor-comprar-two">
                <p className="product-ingredientes">{detail.ingredientes}</p>
                <p className="product-precio">${detail.precio}</p>
                <p>Productos en stock {detail.stock}</p>
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
                            : <ItemCount initial={detail.initial} stock={detail.stock} onAdd={onAdd} />
                        }

                    <Link to="/"><button className='boton'>Seguir comprando</button></Link>
            </div>
        </div>
    )

}


export default ProductsDetails;