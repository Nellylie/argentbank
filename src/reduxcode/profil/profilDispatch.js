import { userService } from "../../service/apiService";
import { profilInfosAction } from "./actionRedux";
import { loginFail } from "../global/actionRedux";

export const profilUser = (token) => async (dispatch) => {
  try {
    const responseProfil = await userService.profil(token);
    dispatch(profilInfosAction(responseProfil.body));
  } catch (e) {
    dispatch(loginFail("An error occurred while loading the profile. Please try again."));
  } finally{
  }
};

export const updateProfilInfos = (token, firstName, lastName) => async (dispatch) => {
  try {
    const responseProfil = await userService.updateProfil(token, firstName, lastName);
    dispatch(profilInfosAction(responseProfil.body));
  } catch (e) {
    dispatch(loginFail("An error occurred while updating the profile. Please try again."));
  }
};
