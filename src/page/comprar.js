import BtnStock from '../utils/btnStock'
import Products from '../utils/products'
import CustomFetch from '../utils/customFetch'
import Product from '../components/product'
import { useContext, useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import { CartContext } from '../components/cartContext'
const Comprar = () => {
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
        <>
            <div className="conteiner-comprar">

                <div className='contenedor-comprar-one'>
                   
                      <Product details={data} />
                        
                </div>

                <div className='contenedor-comprar-two'>
                    <div className='btnstock-comprar'>
                        {
                            cartGo
                            ? <Link to="/cart" style={{textDecoration: "none"}}><button className='boton'>Ir al carrito</button></Link>
                            :<BtnStock initial={1} stock ={5} onAdd={onAdd} />  
                        }
                        
                    </div>
                    
                </div>
                    
            </div>
        
        </>

    )
}

export default Comprar