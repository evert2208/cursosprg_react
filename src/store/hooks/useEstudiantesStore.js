import { useDispatch, useSelector } from "react-redux";
import {
    onSetActiveEst,
    onAddNewEst,
    onUpdateEst,
    onDeleteEst,
    onLoadEsts,
    onLogoutEsts
} from "../cursos/estSlice";
import Swal from 'sweetalert2'
import { cursosApi } from '../../api'


export const useEstudiantesStore = () => {

    const dispatch = useDispatch();
    const {
        estudiantes,
        activeEvent

    } = useSelector(state => state.estudiantes);

    const { user } = useSelector(state => state.auth);

    const setActiveEst = (estEvent) => {
        dispatch(onSetActiveEst(estEvent))
    }

    const startSavingEst = async(estEvent) => {


        try {
            if (estEvent.id) {
                //actualizar
                await cursosApi.put(`/estudiantes/${estEvent.id}`, estEvent);
                dispatch(onUpdateEst({...estEvent, user }));
            } else {
                //crear
                const { data } = await cursosApi.post('/estudiantes', estEvent);
                dispatch(onAddNewEst({...estEvent, id: data.estudiante.id, user }));
            }
        } catch (error) {
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

    }

    const startDeleteEst = async() => {

        try {
            await cursosApi.delete(`/estudiantes/${activeEvent.id}`)
            dispatch(onDeleteEst());
        } catch (error) {
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }

    }

    const startLoadingEst = async() => {

        try {
            const { data } = await cursosApi.get('/estudiantes');

            dispatch(onLoadEsts(data));

        } catch (error) {

        }
    }
    return {
        eventSelected: !!activeEvent,
        estudiantes,
        activeEvent,
        setActiveEst,
        startSavingEst,
        startDeleteEst,
        startLoadingEst

    }
}