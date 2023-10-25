import { LOGIN_FAIL, LOGIN_SUCCESS, TOKEN_KEY } from "./typeRedux";
export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFail = (error) => ({
    type: LOGIN_FAIL,
    payload: error,
});

export const tokenKey = (token) => (
    {
    type: TOKEN_KEY,
    payload: token,
    }
)