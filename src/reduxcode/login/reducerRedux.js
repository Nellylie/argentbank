import { LOGIN_SUCCESS, LOGIN_FAIL, TOKEN_KEY} from "./typeRedux"

const initialState = {
    user: null,
    error: null,
    token: null,

};

export const authentificationReduce = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, error: null };
        case LOGIN_FAIL:
            return { ...state, user: null, error: action.payload };
        case TOKEN_KEY:
            return {...state, token: action.payload}
        default: return state;
    }
}