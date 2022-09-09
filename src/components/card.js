const Card = ({id,imagen,nombre,ingredientes,precio}) => {
    return(
        <> 
        
            <div id={id} className="card">
                <img className="img-card" src={imagen}/>
                <h2 className="card-nombre">{nombre}</h2>
                <p className="card-p">{ingredientes}</p>
                <p className="card-precio">{precio}</p>
                <button className="boton">Comprar</button>
            </div>
       
        </>
    )
}

export default Card