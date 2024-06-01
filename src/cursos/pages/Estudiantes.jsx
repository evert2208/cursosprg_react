import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { CursoList } from "../../components/CursoList"
import { CursosLayout } from "../layout/CursosLayout"
import { useEstudiantesStore, useUiStore } from "../../store/hooks"

export const Estudiantes = () => {
  const dispatch= useDispatch();
  const {estudiantes, setActiveEst, startLoadingEst, startDeleteEst} = useEstudiantesStore();
  const {openModal} = useUiStore();
 
  const onOpenNodal = ()=> {
    // console.log({dobleClick: event})
    openModal();
  }
  
  const onDelete = ({documento, nombre, apellido, correo, id})=> {
    // console.log({click: event})
    dispatch(setActiveEst({documento, nombre, apellido, correo, id}))
    // setActiveEst(event);
    dispatch(startDeleteEst());
  }

  useEffect(() => {
    startLoadingEst();

  }, [])
  
  return (
    <CursosLayout>
    
<div className="row">
      <div className="col pb-5">

<h1>ESTUDIANTES</h1>
</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="row">
            
                <div className="col" id="agregar">
                  <button className="btn btn-secondary" onClick={()=>{onOpenNodal()}} >Nuevo Estudiante</button>
                </div>
              </div>
            <table className="table table-responsive">
      <thead>
    <tr>
      <th scope="col">Documento</th>
      <th scope="col">Nombres</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Correo</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>

    {
      estudiantes.map(est => (
        <tr key={est.id}>
        <th scope="row">{est.documento}</th>
        <td>{est.nombre}</td>
        <td>{est.apellido}</td>
        <td>{est.correo}</td>
        <td><a id="accion" onClick={()=>{}}><i className="bi bi-pencil-square"></i></a>
        <a id="accion" onClick={()=>{onDelete(est)}}><i className="bi bi-trash3-fill"></i></a></td>
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
