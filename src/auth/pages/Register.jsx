import { useState, useMemo } from "react";
import {Link} from 'react-router-dom';
import { AuthLayout } from "../layout/AuthLayout"
import {useAuthStore} from '../../store/hooks/useAuthStore';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector} from 'react-redux';
// import { startCreateUser } from "../../store/auth/thunks"

const formValidations = {
  email: [ (value)=> value.includes('@'), 'no tiene a un @'],
  password: [ (value)=> value.length>=6, 'minimo 6 caracteres'],
  displayName: [ (value)=> value.length>=1, 'nombre requerido'],
}

export const Register = () => {
  const dispatch = useDispatch();
  const {startLogin, startRegister, errorMessage} = useAuthStore();
  const [formSubmit, setformSubmit] = useState(false);

  const {status } = useSelector(state=> state.auth);

const isAuthenticating = useMemo(()=>status ==='checking', [status]);

  const {email, displayName, password, onInputChange,
    isFormValid, formState, emailValid, displayNameValid, passwordValid} = useForm({
    user: '',
    password: '',
    nombre: '',
  }, formValidations);

  const onSubmit = (event)=> {
    event.preventDefault();
    if(!isFormValid) return;
            if(registerPassword!=registerPassword2){
                Swal.fire('Error al registrar', 'las contraseñas no son iguales', 'error');
                return;
            }
            startRegister({
                nombre: nombre,
                user: user,
                password: password
            })
  }

  return (
    <AuthLayout title="Registro">
      <form onSubmit={onSubmit}>

      <div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInput"
   value={displayName} onChange={onInputChange}
   name="displayName"/>
  <label>Nombre y Apellido</label>
  </div>
      <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput"
  value={email} onChange={onInputChange}
  name="email"/>
  <label>Correo</label>
  </div>
  <div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword"
  value={password} onChange={onInputChange}
  name="password"/>
  <label>Contraseña</label>
</div>
<br />
<div className="alert alert-danger" role="alert" 
style={{ display: !!errorMessage ? '' : 'none' }}>
  {errorMessage}
</div>
<br />
<button className="btn btn-dark" disabled={isAuthenticating} type="submit"><i className="bi bi-box-arrow-right"></i> Registrar</button>
<div className="row">
  <p>Ya tienes Cuenta? <Link to="/auth/login">Ingresar</Link></p>

</div>
      </form>
    </AuthLayout>
  )
}
