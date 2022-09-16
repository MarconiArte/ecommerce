const Card = ({id,imagen,nombre,precio}) => {
    return(
        <> 
        
            <div id={id} className="card">
                <img className="img-card" src={imagen}/>
                <h2 className="card-nombre">{nombre}</h2>
                <p className="card-precio">{precio}</p>
                <button className="boton-pedido">Hacer pedido</button>
            </div>
       
        </>
    )
}

export default Card