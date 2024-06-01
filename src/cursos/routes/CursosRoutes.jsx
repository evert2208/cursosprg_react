import {useEffect} from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from '../../components/Navbar'
import { Footer } from "../../components/Footer"
import { useAuthStore } from '../../store/hooks';
import { AuthRoutes } from "../../auth/routes/AuthRoutes"
import { CheckingAuth } from "../../ui/components/CheckingAuth"
import { Articulos, Cursos, Home, Estudiantes } from "../pages"


export const CursosRoutes = () => {
  // const {status} = useCheckAuth();
  const {checkAuthToken, status}= useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])
  
  if(status==='checking') {
    return <CheckingAuth/>
  }
  return (
    <>
     <Navbar/>
     <div>
     <Routes>
    <Route path="/inicio" element={<Home/>}/>
    {
      (status==='no-autenticado')&&( 
      <Route path="/auth/*" element={<AuthRoutes/>}/> )
    }
    {
      (status==='autenticado')&&(
      
      <Route path="/cursos" element={<Cursos/>}/>
      
      )
    }

{
      (status==='autenticado')&&( <Route path="/estudiantes" element={<Estudiantes/>}/>)
    }
    
    {
      (status==='autenticado')&&( <Route path="/inscripciones" element={<Articulos/>}/>)
    }
    
    <Route path="/*" element={<Navigate to="/inicio"/>}/>
   </Routes>
   <Footer/>
     </div>
     
    
   </>
   
  )
}
