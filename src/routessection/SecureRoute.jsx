import { useSelector, useDispatch } from 'react-redux';
import LoginPage from '../pages/LoginPage';

function SecureRoute({ children }) {
    const token = useSelector((state) => state.authentification.token);
    return token? children : <LoginPage></LoginPage>;
}

export default SecureRoute;
