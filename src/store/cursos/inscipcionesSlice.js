import { createSlice } from '@reduxjs/toolkit';

export const inscripcionesSlice = createSlice({
    name: 'inscripciones',
    initialState: {
        loadinginscrip: true,
        inscripciones: [],
        activeinscrip: null
    },
    reducers: {
        onSetActiveInscripcion: (state, { payload }) => {
            state.activeinscrip = payload;
        },

        onAddNewInscripcion: (state, { payload }) => {
            state.inscripciones.push(payload);
            state.activeinscrip = null;
        },

        onUpdateInscripcion: (state, { payload }) => {
            state.inscripciones = state.inscripciones.map(event => {
                if (event.id == payload.id) {
                    return payload;
                }
                return event;
            });
        },

        onDeleteInscripcion: (state) => {
            if (state.activeinscrip) {
                state.inscripciones = state.inscripciones.filter(event => event.id !== state.activeinscrip.id);
                state.activeinscrip = null;
            }

        },

        onLoadinscripciones: (state, { payload = [] }) => {
            state.loadinginscrip = false;
            // state.events = payload;
            payload.forEach(event => {
                const exists = state.inscripciones.some(dbEvent => dbEvent.id === event.id);
                if (!exists) {
                    state.inscripciones.push(event);
                }
            })
        },

        onLogoutinscripciones: (state) => {
            state.loadinginscrip = true,
                state.inscripciones = [],
                state.activeinscrip = null
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onSetActiveInscripcion,
    onAddNewInscripcion,
    onUpdateInscripcion,
    onDeleteInscripcion,
    onLoadinscripciones,
    onLogoutinscripciones
} = inscripcionesSlice.actions;