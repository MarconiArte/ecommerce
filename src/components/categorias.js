import Products from "../utils/products"
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CustomFetch from "../utils/customFetch"
import Product from "../components/product"

const Categorias = () => {
    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(() => {
        
        CustomFetch(0, Products.filter(item => item.categoryId == id))
        .then(result => setData(result))
        .catch(err => console.log(err))
    
    },[])
    
    
    
    return(
        <>
              <Product details={data} />    
        
        
        </>


    )
}

export default Categorias