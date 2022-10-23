
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from "./itemList"
import { db } from '../../utils/fbConfig'
import { collection,query,getDocs,where } from 'firebase/firestore'

const ItemContainer = () => {
    const [data, setData] = useState([])
    const {id} = useParams()
    useEffect(() => {

        let q 

        if(id){
            q = query(collection(db,"productos"), where('categoryId','==',parseInt(id)))
        }else{q = query(collection(db, "productos"))}

        const fsFecth = async() => {
            const QuerySnapshot = await getDocs(q);
            const dataFb = QuerySnapshot.docs.map(document => ({id:document.id, ...document.data()}));
            return dataFb;
        }

        fsFecth().then(result => setData(result))
        .catch(error => console.log(error)) 

    },[id])
    
    
    
    return(
   
            
            <div className="contenedor-productos">
                <ItemList items={data}/>
            </div>
            


    )
}

export default ItemContainer ;