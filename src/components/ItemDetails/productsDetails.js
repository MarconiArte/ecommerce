


const ProductsDetails = ({details}) =>{




    const onAdd = (quantity) =>{
        alert(`${quantity} productos se agregaron al carrito`)
    }

    return(
        <>
        <div className="conteiner-comprar">
            <div className='contenedor-comprar-one'>
            <p>{details.nombre}</p>
            <p>{details.precio}</p>
            <p>{details.ingredientes}</p>
                

            </div>
            <div className='contenedor-comprar-two'>
                <div className='btnstock-comprar'>
                    
                </div>
            </div>
        </div>
        </>
    )

}

export default ProductsDetails