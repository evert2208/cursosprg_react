
import { useMemo } from "react";
import { getCursosByTipo } from "../cursos/helpers/getCursos"
import { CursoCard} from "./CursoCard";


export const CursoList = ({tipo}) => {
    const cursos = useMemo( ()=> getCursosByTipo(tipo),[tipo]);
    
  return (
    
      <div className="row">
      {
        cursos.map(curso => (
          <CursoCard key={curso.id} curso={curso}/>
        ))
      }
    </div>
    
  )
}
