const Product = ({details}) => {
    return(
        <> 
            <img className="img-product" src={details.imagen}/>
            <h2 className="product-nombre">{details.nombre}</h2>
            <p className="product-ingredientes">{details.ingredientes}</p>
            <p className="product-precio">{details.precio}</p>      
        </>
    )
}

export default Product