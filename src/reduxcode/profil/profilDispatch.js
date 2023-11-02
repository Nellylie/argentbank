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

export const updateProfilInfos = (token, firstName, lastName) => async (dispatch)=> {
  try{
    const responseProfil = await userService.updateProfil(token, firstName, lastName);
    dispatch(profilInfosAction(responseProfil.body)); 
    console.log('update', responseProfil);
  }catch(e){
    console.log(e)
  }
}
