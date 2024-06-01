import { configureStore } from '@reduxjs/toolkit'
import { authSlice, cursosSlice, uiSlice } from './'
import { estSlice } from './cursos/estSlice'
import { inscripcionesSlice } from './cursos/inscipcionesSlice'


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cursos: cursosSlice.reducer,
        ui: uiSlice.reducer,
        estudiantes: estSlice.reducer,
        inscripciones: inscripcionesSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})