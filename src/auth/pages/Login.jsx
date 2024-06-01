import { useMemo } from 'react';
import {Link} from 'react-router-dom';
import {useAuthStore} from '../../store/hooks/useAuthStore';
import { AuthLayout } from "../layout/AuthLayout"
import './Login.css'
import { useForm } from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';

const formData = {
  user: '',
  password: ''
};

export const Login = () => {

  const {status} = useSelector(state=> state.auth);
  const {startLogin, startRegister, errorMessage} = useAuthStore();
  const dispatch= useDispatch();
  const {user, password, onInputChange} = useForm(formData);

  const isAuthenticating = useMemo(()=>status ==='checking', [status]);

  const onSubmit = (event)=> {
    event.preventDefault();
    // dispatch(startLogin({email,password}));
    startLogin({user, password});
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>

      <div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInput"
  value={user} name='user' onChange={onInputChange}/>
  <label>usuario</label>
  </div>
  <div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword"
  value={password} onChange={onInputChange} name='password'/>
  <label>Contraseña</label>
</div>
<br />
<div className="alert alert-danger" role="alert" 
style={{ display: !!errorMessage ? '' : 'none' }}>
  {errorMessage}
</div>
<br />
<button disabled={isAuthenticating} type="submit" className="btn btn-dark"><i className="bi bi-box-arrow-right"></i> Ingresar</button>
<div className="row">
<Link to="/auth/register">Crear una cuenta</Link>
</div>
      </form>
    </AuthLayout>
  )
}
