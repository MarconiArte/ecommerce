import products from "../../utils/products"
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CustomFetch from "../../utils/customFetch"
import ItemList from "./itemList"

const ItemContainer = () => {
    const [data, setData] = useState([])
    const {id} = useParams()
    useEffect(() => {
        
        if (id) {
            CustomFetch(2000, products)
            .then(result => setData(result.filter(item => item.categoryId == id)))
            .catch(err => console.log(err))
        }else {
            CustomFetch(2000, products)
            .then(result => setData(result))
            .catch(err => console.log(err))
        }

    },[id])
    
    
    
    return(
   
            
            <div className="contenedor-productos">
                <ItemList items={data}/>
            </div>
            


    )
}

export default ItemContainer ;