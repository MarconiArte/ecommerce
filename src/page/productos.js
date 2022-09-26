import { Link } from "react-router-dom"


const Productos = () => {
    
    
    console.log()
    return(
        <>
            <div className="contenedor-productos">
                <div className="productos-botones">
                    <Link className="boton" to={`/category/10`}>Categoria 1</Link>
                    <Link className="boton">Categoria 2</Link>

                    

                  
                </div>
                

                <h2>ACA VAN LOS PRODUCTOS</h2>
            </div>
            
        </>
    )
}

export default Productos