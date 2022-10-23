import { CartContext } from "./cartContext"
import { useContext} from "react"
import { Link } from "react-router-dom"
import {db} from '../utils/fbConfig'
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore"
import Swal from "sweetalert2";

const Cart = () => {
    

    const {cartList, addItem, remove, clear, totalCompra} = useContext(CartContext)
    

    const crearOrden = async () => {
        let productosDB = cartList.map(prod =>({
            categoryId: prod.categoryId,
            precio: prod.precio,
            ingredientes: prod.ingredientes,
            stock: prod.stock
        }))

        let orden = {
            comprador:{
                nombre:"pepito",
                email:"pepito@gmail.com",
                telefono:"2215574985"
            },
            fecha: serverTimestamp(),
            productos: productosDB,
            total: totalCompra()
        }

        const nuevaOrden =doc(collection(db, 'ordenes'))
        await setDoc(nuevaOrden, orden);

        cartList.forEach(async(prod)=>{
            const prodRef = doc(db, 'productos', prod.id);
            await updateDoc(prodRef, {
                stock: increment(-prod.stock)
            })
        })

        Swal.fire({
            title: 'Tu orden de compra ha sido creada',
            color:'black',
            background:'pink',
            confirmButtonColor: "black",
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })

    }
    

    

    return(
        <>
            <div className="conteiner-comprar">
                
                
                {
                    cartList.length === 0 ? 
                    <div>
                        <Link to={"/"}><button className="boton">Seguir comprando</button></Link>
                        <p>Carrito vacio mi pana</p> 
                    </div>:
                    <div>
                        <Link to='/'><button className="boton" onClick={crearOrden}>Terminar compra</button></Link>
                        <button className="boton" onClick={clear}>Limpiar carrito</button>
                        {cartList.map(item => 
                            
                            <div key={item.id}>
                                <img className="img-card" src={item.imagen} />
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