import logo from "../assets/argentBankLogo.png";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { signOut } from '../reduxcode/login/actionRedux'; 
import { useSelector, useDispatch } from "react-redux";

function HeaderComponent() {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.authentification.isLoggedIn);

    const handleSignOut = () => {
        dispatch(signOut()); 
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div className="main-nav-login-container">
            <FontAwesomeIcon icon={faCircleUser} />
                {isLoggedIn ? (
                    <div onClick={handleSignOut} className="main-nav-item">
                        Sign Out
                    </div>
                ) : (
                    <Link to="/login" className="main-nav-item">
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default HeaderComponent;