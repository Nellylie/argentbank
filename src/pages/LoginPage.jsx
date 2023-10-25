import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../reduxcode/login/loginDispatch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const token = useSelector((state) => state.authentification.token);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
        console.log("dashbord avant", token);
        navigate("/dashboard");
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon className = "sign-in-icon" icon={faCircleUser}></FontAwesomeIcon>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button"> Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default LoginPage;