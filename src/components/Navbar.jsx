import { NavLink } from 'react-router-dom';
import '../cursos/css/Navbar.css';


export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <img src="/assets/ELEVA-T.png" alt="" id="img"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink 
                        className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>
                     </li>

                          <li className="nav-item">
                          <NavLink 
                            className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                            to="/cursos"
                        >
                            Cursos
                        </NavLink>
                         </li>

                          <li className="nav-item">
                      <NavLink 
                        className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                        to="/articulos"
                    >
                      Articulos
                    </NavLink>
                     </li>
                                           
        
      </ul>
    </div>
  </div>
</nav>
  )
}
