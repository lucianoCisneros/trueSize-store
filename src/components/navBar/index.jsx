import './index.css'

export const NavBar = () => {
    return (
      <div className="NavBar">
        
        <nav className="menu">

          <div>
            <img src="/images/LogoWeb.png" className="menu-logo" alt="Logo" />
          </div>

          <ul className="menu-items">
            <li><a href="">Inicio</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Como comprar</a></li>
            <li><a href="">Contacto</a></li>
          </ul>

          <div>
            <i><a href=""><img className="carrito" src="/images/carrito.png" alt="carrito" /></a></i>
          </div>

        </nav>

      </div>
    )
}