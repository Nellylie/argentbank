import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../reduxcode/global/loginDispatch';
import { useNavigate } from 'react-router-dom';

function LoginPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rememberM, setRememberM]=useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
        navigate("/dashboard");
        if(rememberM){
            localStorage.setItem("remember", JSON.stringify(true))
            } else {
                localStorage.removeItem("remember");
                localStorage.removeItem("user");
            }
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
                        <input type="checkbox" id="remember-me" value = {rememberM}  onChange={()=> setRememberM(!rememberM)}/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button"> Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default LoginPage;