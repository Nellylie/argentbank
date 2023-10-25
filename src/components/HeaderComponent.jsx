import logo from "../assets/argentBankLogo.png";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function HeaderComponent(){
    return(
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link to = "/login" className="main-nav-item">
                        <FontAwesomeIcon icon={faCircleUser}/>
                        Sign In
                    </Link>
                </div>
            </nav>
        );
}

export default HeaderComponent;