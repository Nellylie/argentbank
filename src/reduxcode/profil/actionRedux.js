import { PROFIL, UPDATE_PROFILE_NAME } from './typeRedux';


export const profilInfosAction=(infos)=>({
    type: PROFIL,
    payload: infos,
});

export const updateProfileName = (firstName, lastName) => ({
    type: UPDATE_PROFILE_NAME,
    payload: { firstName, lastName },
});
