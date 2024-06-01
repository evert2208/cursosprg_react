import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useAuthStore} from '../store/hooks/useAuthStore';
import '../cursos/css/Navbar.css';


export const Navbar = () => {
  const {status, user}=useSelector(state=>state.auth);
  const {startLogout} = useAuthStore();
  const dispatch = useDispatch()
  const onLogout = ()=> {
      dispatch(startLogout());
  }
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
                         {
                        (status==='autenticado')&&(
                          <li className="nav-item">
                          <NavLink 
                            className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                            to="/cursos"
                        >
                            Cursos
                        </NavLink>
                         </li>
                        )
                      }
                       {
                        (status==='autenticado')&&(
                          <li className="nav-item">
                          <NavLink 
                            className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                            to="/estudiantes"
                        >
                          Estudiantes
                        </NavLink>
                         </li>
                        )
                      }
                        {
                        (status==='autenticado')&&(
                          <li className="nav-item">
                          <NavLink 
                            className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                            to="/inscripciones"
                        >
                          Inscripciones
                        </NavLink>
                         </li>
                        )
                      }

                        
                </ul>
                <ul className=" navbar-nav me-5 mb-5 mb-lg-0 d-flex justify-content-end" id="logout">
                          <li className="nav-item dropdown">
                          
                {
                   (status==='autenticado')&&(
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       <i className="bi bi-person-gear"></i> {user.name}
                </a>
                   )
                }
                {
                  (status==='no-autenticado')&&(
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-fill-lock"></i> Acceder
                  </a> 
                  )
                }
               
                <ul className="dropdown-menu">
                  {
                    (status==='autenticado')&&(
                      <li><a className="dropdown-item cursor" onClick={onLogout}><i className="bi bi-box-arrow-right"></i> Cerrar Seccion</a></li>
                    )
                  }
                   {
                    (status==='no-autenticado')&&(
                      <li> <Link className="dropdown-item cursor" to="/auth/login"><i className="bi bi-box-arrow-right"></i> Iniciar Seccion</Link></li>
                    )
                   }
                </ul>
                </li>
                </ul>
    </div>
  </div>
</nav>
  )
}
