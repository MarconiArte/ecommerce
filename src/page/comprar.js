import BtnStock from '../utils/btnStock'
import Products from '../utils/products'
import CustomFetch from '../utils/customFetch'
import Product from '../components/product'
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
const Comprar = () => {
    const [data, setData] = useState({})
    const {id} = useParams()

    useEffect(() => {
        
            CustomFetch(0, Products.find(item => item.id == id))
            .then(result => setData(result))
            .catch(err => console.log(err))
        
    },[])

    const onAdd = (quantity) =>{
        alert(`${quantity} skere`)
    }

    return(
        <>
            <div className="conteiner-comprar">

                <div className='contenedor-comprar-one'>
                   
                            <Product details={data} />
                        
                </div>

                <div className='contenedor-comprar-two'>
                    <div className='btnstock-comprar'>
                        <BtnStock initial={1} stock ={5} onAdd={onAdd} /> 
                    </div>
                    
                </div>
                    
            </div>
        
        </>

    )
}

export default Comprar