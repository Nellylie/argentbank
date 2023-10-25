import { PROFIL } from './typeRedux';

const initialState = {
    profilInfos : null,
}


export const profilReduce = (state = initialState, action) => {
    switch (action.type) {
        case PROFIL:
            return { ...state, profilInfos: action.payload, error: null };
        default : return state;
    }
}