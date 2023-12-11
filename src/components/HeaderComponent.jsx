import logo from "../assets/argentBankLogo.png";
import {Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { signOut } from '../reduxcode/login/actionRedux'; 
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../reduxcode/login/actionRedux";
import { useEffect } from "react";

function HeaderComponent() {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.authentification.isLoggedIn);
    const navigate = useNavigate();
    const profile = useSelector((state) => state.profil.profilInfos);

    useEffect(()=>{
        if (localStorage.getItem("user")){
            const user = JSON.parse(localStorage.getItem("user"));
        dispatch(loginSuccess(user))
        }


    })
    const handleSignOut = () => {
        dispatch(signOut()); 
        localStorage.removeItem("user");
        localStorage.removeItem("remember");
    };

    const navigation = ()=>{
        navigate("/dashboard");
    }
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div className="main-nav-login-container">
                {isLoggedIn ? (
                    <>
                    <div className="main-nav-item">{profile?.firstName}</div>
                    <FontAwesomeIcon onClick = {() => navigation()} icon={faCircleUser} />
                    <div onClick={handleSignOut} className="main-nav-item">
                        Sign Out
                    </div>
                    </>
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