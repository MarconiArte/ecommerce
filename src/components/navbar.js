import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav>
          
            <div className="header-div">
                
                <Link to="/"><img className="header-logo" src="https://imgur.com/BVuLHts.png"  alt="reference"></img></Link> 
    
                <div className="header-secciones">
                        <Link to="/category/10" className="nav-p">Categoria</Link>
                        <Link to="/category/20" className="nav-p">Categoria 2</Link>
                        <Link to="/category/30" className="nav-p">Categoria 3</Link>
                </div>

                <div className="header-icono">
                      <Link to="/cart"><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png"  alt="reference"/></Link>
                </div>
            </div> 
            
      </nav>
    );
  }

  export default Navbar