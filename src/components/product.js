const Product = ({id,imagen,nombre,ingredientes,precio}) => {
    return(
        <> 
            <img id={id} className="img-product" src={imagen}/>
            <h2 className="product-nombre">{nombre}</h2>
            <p className="product-ingredientes">{ingredientes}</p>
            <p className="product-precio">{precio}</p>      
        </>
    )
}

export default Product