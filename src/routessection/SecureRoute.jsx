import { useSelector, useDispatch } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import { useEffect } from 'react';
import { tokenKey } from '../reduxcode/login/actionRedux';

function SecureRoute({ children }) {
    const token = useSelector((state) => state.authentification.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("remember")){
        const userToken = localStorage.getItem("user");
        if (userToken) {
            const { token } = JSON.parse(userToken);
            dispatch(tokenKey(token));
        }
    }
    }, [dispatch]);
    
    return token? children : <LoginPage></LoginPage>;
}

export default SecureRoute;
