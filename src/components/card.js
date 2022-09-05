const Card = ({id,imagen,nombre,ingredientes}) => {
    return(
        <> 
            <div id={id} className="card">
                <img className="img-card" src={imagen}/>
                <h2 className="card-nombre">{nombre}</h2>
                <p className="card-p">{ingredientes}</p>
                <button className="boton">Comprar</button>
            </div>
        </>
    )
}

export default Card