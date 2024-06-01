
import { AuthLayout } from '../../auth/layout/AuthLayout'
import './Ckecking.css'

export const CheckingAuth = () => {
  return (
    <AuthLayout title="Cargando...">
      <div className="container" id='cargando'>

      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
      </div>
    </AuthLayout>
  )
}
