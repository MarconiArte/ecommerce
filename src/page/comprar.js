import BtnStock from '../utils/btnStock'
import Products from '../utils/products'
import CustomFetch from '../utils/customFetch'
import Product from '../components/product'
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
const Comprar = () => {
    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            CustomFetch(2000, Products.filter(item => item.id == id))
            .then(result => setData(result))
            .catch(err => console.log(err))
        }else {
            CustomFetch(2000, Products)
            .then(result => setData(result))
            .catch(err => console.log(err))
        }
        
    },[id])

    return(
        <>
            <div className="conteiner-comprar">

                <div className='contenedor-comprar-one'>
                    {data.map(item =>
                            <Product
                                key={item.id}
                                id={item.id}
                                imagen={item.imagen}
                                />        
                        )}
                </div>

                <div className='contenedor-comprar-two'>
                    {data.map(item =>
                        <Product
                            key={item.id}
                            nombre={item.nombre}
                            ingredientes={item.ingredientes}
                            precio={item.precio}
                        />        
                    )}
                    <div className='btnstock-comprar'>
                        <BtnStock /> 
                    </div>
                    
                </div>
                    
            </div>
        
        </>

    )
}

export default Comprar