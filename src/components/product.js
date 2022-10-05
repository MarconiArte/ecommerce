const Product = ({details}) => {
    return(
        <> 
        <div className="product-conteiner">
            <div>
                <img className="img-product" src={`/img/${details.imagen}`}/>
                    <h2 className="product-nombre">{details.nombre}</h2>
            </div>

            <div>
                <p className="product-ingredientes">{details.ingredientes}</p>
                <p className="product-precio">{details.precio}</p>   
            </div>
        </div>
        
           
               
        </>
    )
}

export default Product