import { CursosLayout } from "../layout/CursosLayout"
import '../css/Home.css'

export const Home = () => {
  return (
    <CursosLayout>
      <div className="container">
        <img id="bienvenido" src="https://eleternoestudiante.com/wp-content/uploads/2020/04/cropped-plataformas-de-cursos-online-gratis.jpg?w=640" alt="" />
        <div className="row">
          <div className="col-6">
            <img className='home' src="https://i.ytimg.com/vi/7TKY-jksHRQ/maxresdefault.jpg" alt="" />
          </div>
          <div className="col-6">
            <h2><strong>Cursos</strong></h2>
            <p>Estos curso de programación están diseñados para equipar a los estudiantes con las habilidades
               fundamentales necesarias para comenzar su viaje en el mundo del desarrollo de software. 
               Cubriendo Front-end y Back-end, los participantes 
               aprenderán a través de ejercicios prácticos y proyectos reales, lo que les permitirá comprender 
               los principios de la codificación, el desarrollo de algoritmos y la resolución de problemas. 
               Ideal tanto para principiantes como para aquellos que buscan fortalecer su base técnica,
                este curso ofrece una introducción completa y accesible a los conceptos clave de la programación,
                 preparando a los estudiantes para futuros desafíos en tecnología.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h2><strong>Articulos</strong></h2>
            <p>
              En la era digital actual, la habilidad para programar se ha convertido en una herramienta esencial,
             casi tan fundamental como saber leer y escribir. Ya sea que estés interesado en desarrollar 
             aplicaciones móviles, diseñar sitios web, o automatizar tareas cotidianas, entender los principios 
             básicos de programación puede abrirte puertas a un sinfín de oportunidades. Estos artículos 
             explorará los conceptos básicos de la programación, examinando los lenguajes más populares y
              accesibles para principiantes, como Python y JavaScript, y ofreciendo consejos prácticos sobre 
              cómo comenzar tu viaje en el emocionante mundo del código. Desde la instalación de tu primer 
              entorno de desarrollo hasta escribir tu primera línea de código, te guiaremos a través de cada 
              paso del proceso.
            </p>
          </div>
          <div className="col-6">
          <img className='home' src="https://blogthinkbig.com/wp-content/uploads/sites/4/2023/03/Code-Computers-Programming.jpg?fit=1920%2C1280" alt="" />
          </div>
        </div>
      </div>
    </CursosLayout>
  )
}
