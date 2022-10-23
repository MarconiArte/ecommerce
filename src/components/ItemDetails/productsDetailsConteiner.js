import { useEffect, useState } from "react"
import ProductsDetails from "./productsDetails"
import { useParams } from "react-router-dom"
import {db} from '../../utils/fbConfig'
import {doc, getDoc} from 'firebase/firestore'

const ProductsDetailsConteiner = () =>{

    const [data, setData] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const qDoc = doc(db, 'productos', id)
        
        getDoc(qDoc)
            .then(result => setData({id: result.id, ...result.data()}))
            .catch(error => console.log(error))
    },[id])

    return(
        <>
            <ProductsDetails detail={data}/>
        </>
    )
}

export default ProductsDetailsConteiner;