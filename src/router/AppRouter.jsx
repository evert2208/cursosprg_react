import { Routes, Route, Navigate } from "react-router-dom"
import { Articulos, Cursos, Home } from "../cursos/pages"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"


export const AppRouter = () => {


  return (
    <>
     <Navbar/>
     <div>
     <Routes>
    <Route path="/inicio" element={<Home/>}/>
      <Route path="/cursos" element={<Cursos/>}/>
      <Route path="/articulos" element={<Articulos/>}/>
    <Route path="/*" element={<Navigate to="/inicio"/>}/>
   </Routes>
     </div>
     <Footer/>
    
   </>
   
  )
}
