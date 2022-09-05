const Navbar = () => {
    return (
      <nav>
          <div className="header-div">
              <span className='header-logo'>Pia Pasteleria</span>
  
              <div className="header-secciones">
                    <p>Home</p>
                    <p>Productos</p>
                    <p>Contacto</p>
                    <p>Ubicacion</p>
              </div>

              <div className="header-icono">
                    <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png"/>
              </div>
          </div> 
      </nav>
    );
  }

  export default Navbar