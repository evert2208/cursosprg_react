
import '../cursos/css/CursoCard.css';

export const CursoCard = ({curso}) => {

   
  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col">
                  {
                    (curso.tipo==='curso')&&(
                      <iframe width="460" height="315" src={curso.link} title="YouTube video player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    )
                  }
                  {
                    (curso.tipo==='articulo')&&(
                      <a key={curso.id} href={curso.link} target='_blanck'>
                        <img width="460" height="315" src={curso.img} alt={curso.titulo} className='img-article'/>
                      </a>
                    )
                  }
                    
                    <div className="card-body">
                        <h5 className="card-title">{curso.titulo}</h5>
                        <p className="card-text">{curso.descripcion}</p>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
