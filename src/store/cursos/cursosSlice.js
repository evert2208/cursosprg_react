import { createSlice } from '@reduxjs/toolkit';

export const cursosSlice = createSlice({
    name: 'cursos',
    initialState: {
        loadingCursos: true,
        cursos: [],
        activeCurso: null
    },
    reducers: {
        onSetActiveCurso: (state, { payload }) => {
            state.activeCurso = payload;
        },

        onAddNewCurso: (state, { payload }) => {
            state.cursos.push(payload);
            state.activeCurso = null;
        },

        onUpdateCurso: (state, { payload }) => {
            state.cursos = state.cursos.map(event => {
                if (event.id == payload.id) {
                    return payload;
                }
                return event;
            });
        },

        onDeleteCurso: (state) => {
            if (state.activeCurso) {
                state.cursos = state.cursos.filter(event => event.id !== state.activeCurso.id);
                state.activeCurso = null;
            }

        },

        onLoadCursos: (state, { payload = [] }) => {
            state.loadingCursos = false;
            // state.events = payload;
            payload.forEach(event => {
                const exists = state.cursos.some(dbEvent => dbEvent.id === event.id);
                if (!exists) {
                    state.cursos.push(event);
                }
            })
        },

        onLogoutCursos: (state) => {
            state.loadingCursos = true,
                state.cursos = [],
                state.activeCurso = null
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onSetActiveCurso,
    onAddNewCurso,
    onUpdateCurso,
    onDeleteCurso,
    onLoadCursos,
    onLogoutCursos
} = cursosSlice.actions;