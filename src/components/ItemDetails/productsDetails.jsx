import { Link, useParams } from "react-router-dom";
import BtnStock from "../../utils/btnStock"
import {useEffect, useState, useContext } from "react";
import { CartContext } from '../../components/cartContext'
import CustomFetch from '../../utils/customFetch'
import Products from '../../utils/products'

const ProductsDetails = ({detail}) =>{

    const [data, setData] = useState({})
    const [cartGo, setcartGo] = useState(false)
    const {id} = useParams()
    const { addItem} = useContext(CartContext)


    useEffect(() => {
        
        CustomFetch(0, Products.find(item => item.id == id))
        .then(result => setData(result))
        .catch(err => console.log(err))
    
    },[])



    const onAdd = (quantity) =>{
        setcartGo(true)
        alert(`${quantity} productos se agregaron al carrito`)
        addItem(data, quantity)
    }

    return(
       
        <div className="conteiner-comprar">
            <h2>{detail.nombre}</h2>
               <img src={detail.imagen} alt="reference"/>
              <p>{detail.ingredientes}</p>
              <p>{detail.precio}</p>
              <div className='btnstock-comprar'>
                        {
                            cartGo
                            ? <Link to="/cart" style={{textDecoration: "none"}}><button className='boton'>Ir al carrito</button></Link>
                            :<BtnStock initial={1} stock ={5} onAdd={onAdd} />  
                        }
                        
                    </div>
            <div className='contenedor-comprar-one'>
           
           
  
            </div>
        </div>

    )

}

export default ProductsDetails;