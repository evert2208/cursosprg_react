import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AppRouter } from "./router/AppRouter"


export const CursosApp= () =>{
  return (
    <Provider store={store}>
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
    </Provider>
  )
}

