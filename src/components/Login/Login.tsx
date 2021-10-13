import {useState} from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthProvider";
import { Link } from 'react-router-dom';
import "./Login.css"

export const Login=()=>{
    const {loginUserWithCredentials}=useAuth();
    const navigate=useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showpasswordState, setPassState] = useState(false)
    const [errorState, setErrorState] = useState(false);
    async function loginHandler(e: any, username: string, password: string) {
        e.preventDefault()
        const response = await loginUserWithCredentials(username, password)
        console.log(response)
        if (response.success)
            navigate("/")
        else {
            setUsername('');
            setPassword('')
            setErrorState(true);
        }
    }
    return (
        <div className="container-md">
            <form className="Login-box"
                onSubmit={(e) => loginHandler(e, username, password)}
            >
                <div className="display-4">
                    <h1 className="white">Login </h1>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" required value={username} placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <input type={showpasswordState ? "text" : "password"} placeholder="Password" required
                        value={password}
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="password-state" onClick={() => setPassState(!showpasswordState)}>
                        {showpasswordState ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                    </div>
                </div>
                <button type="submit" className="btn btn-dark center">Log In</button>
                <br/>
                <button className="btn btn-dark center" onClick={()=>{setUsername("hriday.bhatia15@gmail.com");setPassword("Test@123")}}>Log in as guestUser</button>
                <p className="text-explore">Dont have a account?
                <Link to="/signup" className="moveto-signup">
                        Sign Up</Link>
                </p>
                {errorState ? "" : <br />}
                <p className="error-desc" style={{
                    display: errorState ? "block" : "none",
                }}>Wrong email or password entered</p>
            </form>
        </div>
    );
}