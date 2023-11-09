import { PROFIL, UPDATE_PROFILE_NAME } from './typeRedux';

const initialState = {
    profilInfos : null,
}


export const profilReduce = (state = initialState, action) => {
    switch (action.type) {
        case PROFIL:
            return { ...state, profilInfos: action.payload, error: null };

        case UPDATE_PROFILE_NAME:
            return {
                ...state,
                profilInfos: {
                    ...state.profilInfos,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                }
            }
        default : return state;
    }
}