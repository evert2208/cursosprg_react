import { CursoList } from "../../components/CursoList"
import { CursosLayout } from "../layout/CursosLayout"


export const Cursos = () => {
  return (
    <CursosLayout>
      <div className="row">
      <div className="col">

      <h1>
        Cursos de Programacion
      </h1>
</div>
  <div className="col">
 
  </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
          
                <CursoList tipo="curso"/>
            
          </div>
        </div>
      </div>
    </CursosLayout>
  )
}
