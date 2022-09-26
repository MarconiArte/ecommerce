import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav>
          
            <div className="header-div">
                
                <Link to="/"><img className="header-logo" src="../img/logo.png"></img></Link> 
    
                <div className="header-secciones">
                        <Link to="/" className="nav-p"><p>Home</p></Link>
                        <Link to="/productos" className="nav-p"><p>Productos</p></Link>
                        <Link to="/contacto" className="nav-p"><p>Contacto</p></Link>
                      <p>¿Comó llegar?</p>
                </div>

                <div className="header-icono">
                      <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png"/>
                </div>
            </div> 
            
      </nav>
    );
  }

  export default Navbar