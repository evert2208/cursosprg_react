
import './cursoLayout.css';
export const CursosLayout = ({children}) => {
  return (
     <div  id='container'>
     <div className="container animate__animated animate__fadeIn animate__faster">
        {children}
    </div>
     </div>
  )
}
