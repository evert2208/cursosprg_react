import { createSlice } from '@reduxjs/toolkit';

export const estSlice = createSlice({
    name: 'estudiantes',
    initialState: {
        loadingEst: true,
        estudiantes: [],
        activeEst: null
    },
    reducers: {
        onSetActiveEst: (state, { payload }) => {
            state.activeEst = payload;
        },

        onAddNewEst: (state, { payload }) => {
            state.estudiantes.push(payload);
            state.activeEst = null;
        },

        onUpdateEst: (state, { payload }) => {
            state.cursos = state.estudiantes.map(event => {
                if (event.id == payload.id) {
                    return payload;
                }
                return event;
            });
        },

        onDeleteCurso: (state) => {
            if (state.activeEst) {
                state.estudiantes = state.estudiantes.filter(event => event.id !== state.activeEst.id);
                state.activeEst = null;
            }

        },

        onLoadEsts: (state, { payload = [] }) => {
            state.loadingEst = false;
            // state.events = payload;
            payload.forEach(event => {
                const exists = state.estudiantes.some(dbEvent => dbEvent.id === event.id);
                if (!exists) {
                    state.estudiantes.push(event);
                }
            })
        },

        onLogoutEsts: (state) => {
            state.loadingEst = true,
                state.estudiantes = [],
                state.activeEst = null
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onSetActiveEst,
    onAddNewEst,
    onUpdateEst,
    onDeleteEst,
    onLoadEsts,
    onLogoutEsts
} = estSlice.actions;