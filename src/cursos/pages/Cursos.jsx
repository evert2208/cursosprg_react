import {useEffect} from 'react'
import { CursosLayout } from "../layout/CursosLayout"
import { useCursosStore, useUiStore } from "../../store/hooks"
import { CursoModal } from '../../components/CursoModal';

export const Cursos = () => {
  const {cursos, setActiveCurso, startLoadingCursos, startDeleteCurso} = useCursosStore();
  const {openModal} = useUiStore();
 
  const onOpenNodal = (event)=> {
    openModal();
  }
  const onSelect = (event)=> {
    setActiveCurso(event);
  }

  const onDelete = ()=> {
    startDeleteCurso();
  }

  
  useEffect(() => {
    startLoadingCursos();

  }, [])
  
  return (
    <>
    <CursosLayout>
    
<div className="row">
      <div className="col pb-5">

<h1>CURSOS</h1>
</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="row">
            
                <div className="col" id="agregar">
                  <button className="btn btn-secondary" onClick={()=>{onOpenNodal()}} >Agregar Curso</button>
                </div>
              </div>
            <table className="table table-responsive">
      <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>

    {
      cursos.map(curso => (
        <tr key={curso.id}>
        <th scope="row">{curso.nombre}</th>
        <td>{curso.descripcion}</td>
        <td><a id="accion" onClick={()=>{}}><i className="bi bi-pencil-square"></i></a>
        <a id="accion" onClick={()=>{onSelect(curso); onDelete()}}><i className="bi bi-trash3-fill"></i></a></td>
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
    <CursoModal/>
    </>
  )
}
