import { useDispatch, useSelector } from "react-redux";
import {
    onSetActiveInscripcion,
    onAddNewInscripcion,
    onUpdateInscripcion,
    onDeleteInscripcion,
    onLoadinscripciones,
    onLogoutinscripciones
} from "../cursos/inscipcionesSlice";
import Swal from 'sweetalert2'
import { cursosApi } from '../../api'



export const useInscripStore = () => {

    const dispatch = useDispatch();
    const {
        inscripciones,
        activeEvent

    } = useSelector(state => state.inscripciones);

    const { user } = useSelector(state => state.auth);

    const setActiveInscripcion = (InscripcionEvent) => {
        dispatch(onSetActiveInscripcion(InscripcionEvent))
    }

    const startSavingInscripcion = async(InscripcionEvent) => {


        try {
            if (InscripcionEvent.id) {
                //actualizar
                await cursosApi.put(`/cur-est/${InscripcionEvent.id}`, InscripcionEvent);
                dispatch(onUpdateInscripcion({...InscripcionEvent, user }));
            } else {
                //crear
                const { data } = await cursosApi.post('/cur-est', InscripcionEvent);
                dispatch(onAddNewInscripcion({...InscripcionEvent, id: data.Inscripcion.id, user }));
            }
        } catch (error) {
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

    }

    const startDeleteInscripcion = async() => {

        try {
            await cursosApi.delete(`/cur-est/${activeEvent.id}`)
            dispatch(onDeleteInscripcion());
        } catch (error) {
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }

    }

    const startLoadinginscripciones = async() => {

        try {
            const { data } = await cursosApi.get('/cur-est');

            dispatch(onLoadinscripciones(data));

        } catch (error) {

        }
    }
    return {
        eventSelected: !!activeEvent,
        inscripciones,
        activeEvent,
        setActiveInscripcion,
        startSavingInscripcion,
        startDeleteInscripcion,
        startLoadinginscripciones

    }
}