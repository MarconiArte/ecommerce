import customFetch from "../../utils/customFetch"
import { useEffect, useState } from "react"
import products from "../../utils/products"
import ProductsDetails from "./productsDetails"
import { useParams } from "react-router-dom"

const ProductsDetailsConteiner = () =>{

    const [data, setData] = useState({})
    const {id} = useParams()

    useEffect(() => {
        customFetch(2000, products.find(item => item.id == id))
        .then(result => setData(result))
        .catch(error => console.log(error))
       
    },[])

 

    return(
        <>
            <ProductsDetails detail={data}/>
        
        </>
    )
}

export default ProductsDetailsConteiner;