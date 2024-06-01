import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useCursosStore, useUiStore } from '../store/hooks';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

  Modal.setAppElement('#root');

export const CursoModal = () => {
    console.log('entro')
    const {isModalOpen, closeModal} = useUiStore();
    const { activeCurso, startSavingCurso} = useCursosStore();
    const [formSubmit, setformSubmit] = useState(false)

    const [formValues, setformValues] = useState({
      nombre: '',
      descripcion: '',
      
    });


    const titleClass = useMemo(() => {

      if(!formSubmit) return '';

      return (formValues.nombre.length>0)?'':'is-invalid';

    }, [formValues.nombre, formSubmit])


    useEffect(() => {
      if(activeCurso !=null){
        setformValues({...activeCurso});
      }
    
    }, [activeCurso])
    

    const onInputChange = ({target})=> {
      setformValues({
        ...formValues,
        [target.name]: target.value
      })
    }

    const onDateChange = (event, changing)=> {
      setformValues({
        ...formValues,
        [changing]: event
      })
    }

    const onCloseModal = ()=> {
      closeModal();
    }

    const onSubmit = async(event)=> {
      event.preventDefault();
      setformSubmit(true);

      if(formValues.nombre.length<=0) return;

      await startSavingCurso(formValues);
      closeModal();
      setformSubmit(false);
    
    }
    return (
          <Modal
          isOpen={isModalOpen}
          onRequestClose={onCloseModal}
          style={customStyles}
          className="modal"
          overlayClassName="modal-fondo"
          closeTimeoutMS={200}
          >
              <h1> Nuevo Curso </h1>
  <hr />
  <form className="container" onSubmit={onSubmit}>
  
     <div className="form-group mb-2">
       <label>Nombre</label>
        <input 
            type="text" 
            className={ `form-control ${titleClass}`}
            placeholder="Nombre del curso"
            name="nombre"
            autoComplete="off"
            value={formValues.nombre}
            onChange={onInputChange}
        />
    </div>
    
    <div className="form-group mb-2">
        <label>Descripcion</label>
        <input 
            type="text" 
            className={ `form-control`}
            placeholder="Descripcion"
            name="descripcion"
            autoComplete="off"
            value={formValues.descripcion}
            onChange={onInputChange}
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div> 
  
      <button
          type="submit"
          className="btn btn-outline-primary btn-block"
      >
          <i className="far fa-save"></i>
          <span> Guardar</span>
      </button>
  
  </form>
      </Modal>
    )
  }

