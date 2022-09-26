import { Link } from "react-router-dom"

const Card = ({id,imagen,nombre,precio}) => {
    return(
        <> 
        
            <div id={id} className="card">
                <img className="img-card" src={imagen}/>
                <h2 className="card-nombre">{nombre}</h2>
                <p className="card-precio">{precio}</p>
                <Link className="boton-pedido" to={`/comprar/${id}`}>Hacer pedido</Link>
            </div>
       
        </>
    )
}

export default Card