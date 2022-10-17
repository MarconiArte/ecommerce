import customFetch from "../../utils/customFetch"
import { useEffect, useState } from "react"
import Products from "../../utils/products"
import ProductsDetails from "./productsDetails"
import { useParams } from "react-router-dom"

const ProductsDetailsConteiner = () =>{

    const [data, setData] = useState({})
    const {id} = useParams()

    useEffect( () => {
        customFetch(2000, Products.find(item => item.id === id))
        .then(result => setData(result))
        .catch(error => console.log(error))
        .finally()

        console.log(setData)
    },[])

 

    return(
        <>
            <ProductsDetails details={data} />
        
        </>
    )
}

export default ProductsDetailsConteiner