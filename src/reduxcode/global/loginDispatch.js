import { userService } from '../../service/apiService';
import { loginSuccess, loginFail, tokenKey, loading } from './actionRedux';

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const response = await userService.login(email, password);
    dispatch(tokenKey(response.body["token"]));
    dispatch(loginSuccess(response.user));
    dispatch(loading(false));

  } catch (e) {
    dispatch(loginFail(e.message));
    dispatch(loading(false));
  } finally{
    dispatch(loading(false));

  }
};