import {useEffect} from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import { useAuthStore } from '../store/hooks';
import { CursosRoutes } from "../cursos/routes/CursosRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


export const AppRouter = () => {
  const {checkAuthToken, status}= useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])
  
  if(status==='checking') {
    return <CheckingAuth/>
  }

  return (
  <Routes>
  <Route path="/*" element={<CursosRoutes/>}/> 
 </Routes>
   
  )
}
