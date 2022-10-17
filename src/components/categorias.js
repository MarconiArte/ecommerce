import Products from "../utils/products"
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CustomFetch from "../utils/customFetch"
import ItemList from "./itemList"
import { Link } from "react-router-dom"

const Categorias = () => {
    const [data, setData] = useState([])
    const {id} = useParams()
    useEffect(() => {
        
        if (id) {
            CustomFetch(200, Products.filter(item => item.categoryId == id))
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
            <div className="productos-botones">
                <Link to={'/category/10'} className="boton">Categoria 1</Link>
                <Link to={'/category/20'} className="boton">Categoria 2</Link>
            </div>
            
            
            <div className="contenedor-productos">
                <ItemList items={data}/>
            </div>
            
        </>


    )
}

export default Categorias