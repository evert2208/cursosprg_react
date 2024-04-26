import { cursos } from '../../api/data/cursos'


export const getCursosByTipo = (tipo) => {

    const validTipo = ['curso', 'articulo'];

    if (!validTipo.includes(tipo)) {
        throw new Error(`${tipo} no existe`);
    }

    return cursos.filter(x => x.tipo === tipo);
}