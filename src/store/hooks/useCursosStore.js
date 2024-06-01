import { useDispatch, useSelector } from "react-redux";
import { onAddNewCurso, onDeleteCurso, onLoadCursos, onSetActiveCurso, onUpdateCurso } from "../cursos/cursosSlice";
import Swal from 'sweetalert2'
import { cursosApi } from '../../api'


export const useCursosStore = () => {

    const dispatch = useDispatch();
    const {
        cursos,
        activeCurso

    } = useSelector(state => state.cursos);

    const { user } = useSelector(state => state.auth);

    const setActiveCurso = (cursoEvent) => {
        dispatch(onSetActiveCurso(cursoEvent))
    }

    const startSavingCurso = async(cursoEvent) => {


        try {
            if (cursoEvent.id) {
                //actualizar
                await cursosApi.put(`/cursos/${cursoEvent.id}`, cursoEvent);
                dispatch(onUpdateCurso({...cursoEvent, user }));
            } else {
                //crear
                const { data } = await cursosApi.post('/cursos', cursoEvent);
                dispatch(onAddNewCurso({...cursoEvent, id: data.curso.id, user }));
            }
        } catch (error) {
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

    }

    const startDeleteCurso = async() => {
        try {

            await cursosApi.delete(`/cursos/${activeCurso.id}`)
            dispatch(onDeleteCurso());
            Swal.fire('Eliminado!', 'Se ha eliminado el registro', 'success');
        } catch (error) {
            console.log(error)
            Swal.fire('Error al eliminar', 'cominiquese con el Admin', 'error');
        }

    }

    const startLoadingCursos = async() => {

        try {
            const { data } = await cursosApi.get('/cursos');

            dispatch(onLoadCursos(data));

        } catch (error) {

        }
    }
    return {
        eventSelected: !!activeCurso,
        cursos,
        activeCurso,
        setActiveCurso,
        startSavingCurso,
        startDeleteCurso,
        startLoadingCursos

    }
}