import { userService } from "../../service/apiService";
import { profilInfosAction } from "./actionRedux";

export const profilUser = (token) => async (dispatch)=>{
  try{
    const responseProfil = await userService.profil(token);
    dispatch(profilInfosAction(responseProfil.body));
    console.log(responseProfil);
  }catch(e){
    console.log(e)
  }

}
