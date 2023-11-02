import { LOGIN_SUCCESS, LOGIN_FAIL, TOKEN_KEY, SIGN_OUT} from "./typeRedux"

const initialState = {
    user: null,
    error: null,
    token: null,
    isLoggedIn: false,

};

export const authentificationReduce = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, error: null, isLoggedIn: true };
        case LOGIN_FAIL:
            return { ...state, user: null, error: action.payload, isLoggedIn: false };
        case TOKEN_KEY:
            return {...state, token: action.payload}
            case SIGN_OUT:
                return {
                    ...state,
                    token: null,
                    isLoggedIn: false,
                };
        default: return state;
        
    }
}