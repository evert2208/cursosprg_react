import {useEffect} from 'react'
import { CursoList } from "../../components/CursoList"
import { CursosLayout } from "../layout/CursosLayout"
import { useInscripStore, useUiStore } from "../../store/hooks"

export const Articulos = () => {
  const {inscripciones, setActiveInscripcion, startLoadinginscripciones} = useInscripStore();
  const {openModal} = useUiStore();
 
  const onOpenNodal = (event)=> {
    // console.log({dobleClick: event})
    openModal();
  }
  const onSelect = (event)=> {
    // console.log({click: event})
    setActiveInscripcion(event);
  }

  useEffect(() => {
    startLoadinginscripciones();

  }, [])
  
  return (
    <CursosLayout>
    
<div className="row">
      <div className="col pb-5">

<h1>INSCRIPCIONES</h1>
</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="row">
            
                <div className="col" id="agregar">
                  <button className="btn btn-secondary" onClick={()=>{onOpenNodal()}} >Nueva Inscripcion</button>
                </div>
              </div>
            <table className="table table-responsive">
      <thead>
    <tr>
      <th scope="col">Curso</th>
      <th scope="col">Estudiante</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>

    {
      inscripciones.map(inscripcion => (
        <tr key={inscripcion.id}>
        <td>{inscripcion.curso_nombre}</td>
        <td>{inscripcion.estudiante_doc}</td>
        <td><a id="accion" onClick={()=>{}}><i className="bi bi-pencil-square"></i></a>
        <a id="accion" onClick={()=>{}}><i className="bi bi-trash3-fill"></i></a></td>
      </tr>
      ))
    }
  
  
  </tbody>
</table>
       
            </div>
          </div>
        </div>
      </div>
    </CursosLayout>
  )
}
