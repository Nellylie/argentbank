import { userService } from '../../service/apiService';
import { loginSuccess, loginFail, tokenKey } from './actionRedux';

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await userService.login(email, password);
    dispatch(tokenKey(response.body["token"]));
    dispatch(loginSuccess(response.user));
    console.log(response.user);
  } catch (error) {
    dispatch(loginFail(error.message));
  }
};