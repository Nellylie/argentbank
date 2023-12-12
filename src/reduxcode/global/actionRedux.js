import { LOGIN_FAIL, LOGIN_SUCCESS, TOKEN_KEY, SIGN_OUT, CLEAR_ERROR, LOADING, UPDATE_ERROR} from "./typeRedux";
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

export const clearError = () => ({
    type: CLEAR_ERROR,
});



export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const loading =(isLoading)=>{
    return {
        type: LOADING,
        payload: isLoading
    };
}

export const updateError=(error)=>{
    return{
        type: UPDATE_ERROR,
        payload: error
    }
}