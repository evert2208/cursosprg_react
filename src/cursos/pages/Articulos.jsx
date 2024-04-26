import { CursoList } from "../../components/CursoList"
import { CursosLayout } from "../layout/CursosLayout"

export const Articulos = () => {
  return (
    <CursosLayout>
      <div className="row">
      <div className="col">

      <h1>
        Articulos de Progamacion
      </h1>
</div>
  <div className="col">
 
  </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
          
                <CursoList tipo="articulo"/>
            
          </div>
        </div>
      </div>
    </CursosLayout>
  )
}
