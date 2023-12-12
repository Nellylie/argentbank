import { LOGIN_SUCCESS, LOGIN_FAIL, TOKEN_KEY, SIGN_OUT, CLEAR_ERROR, LOADING } from "./typeRedux"

const initialState = {
    user: null,
    error: null,
    token: null,
    isLoggedIn: false,
    loader: false,
};

export const authentificationReduce = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, error: null, isLoggedIn: true };
        case LOGIN_FAIL:
            return { ...state, user: null, error: action.payload, isLoggedIn: false };
        case TOKEN_KEY:
            return { ...state, token: action.payload }
        case SIGN_OUT:
            return {
                ...state,
                token: null,
                isLoggedIn: false,
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        case LOADING:
            return{
              ...state,
              loader: action.payload
            };
        default: return state;

    }
}