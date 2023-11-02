import { LOGIN_FAIL, LOGIN_SUCCESS, TOKEN_KEY, SIGN_OUT } from "./typeRedux";
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

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};