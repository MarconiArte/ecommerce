import { useEffect, useState } from "react"
import Card from "../components/card"
import Products from "../utils/products"
import CustomFetch from "../utils/customFetch"
const Cards = () => {
    const [data, setData] = useState([])

    console.log(Products)
    useEffect(() => {
        
        CustomFetch(2000, Products)
            .then(result => setData(result))
            .catch(err => console.log(err))
    },[])

    return(
        <>
            {
                data.map(item => {
                    <div className="conteiner-card">
                        <Card 
                            key={item.id}
                            id={item.id}
                            imagen={item.imagen}
                            ingredientes={item.ingredientes}
                            precio={item.precio}
                        />
                    </div>
                })
            }
        </>
    )
}

export default Cards