import { Link } from "react-router-dom";

const Item = ({id,nombre,imagen,precio,ingredientes}) => {
    return(
        <> 
        <div className="product-conteiner">
            <div>
                <h2 className="product-nombre">{nombre}</h2>
                <img className="img-card" src={imagen}/>    
            </div>

            <div>
                <p className="product-ingredientes">{ingredientes}</p>
                <p className="product-precio">${precio}</p>
               <Link to={`/item/${id}`}><button className="boton">Comprar</button></Link>
            </div>
        </div>
        
        </>
    )
}

export default Item;