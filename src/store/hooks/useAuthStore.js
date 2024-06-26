import { useDispatch, useSelector } from 'react-redux'
import cursosApi from '../../api/CursosApi';
import { clearErrorMessage, onCheking, onLogin, onLogout } from '../auth/authSlice';
import { onLogoutCursos } from '../cursos/cursosSlice';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const startLogin = async({ user, password }) => {
        dispatch(onCheking());
        try {

            const { data } = await cursosApi.post('/login', { user, password });

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.user.nombre, uid: data.user.id }))
        } catch (error) {
            console.log(error);
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const startRegister = async({ email, password, name }) => {

        dispatch(onCheking());
        try {
            const { data } = await cursosApi.post('/auth/new', { email, password, name });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }))
        } catch (error) {
            dispatch(onLogout(error.response.data.msg || 'Error'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await cursosApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }))
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogoutCursos());
        dispatch(onLogout());
    }

    return {
        status,
        user,
        errorMessage,
        //metodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }
}