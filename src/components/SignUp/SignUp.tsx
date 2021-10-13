import "./SignUp.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthProvider";

export const SignUp = () => {
    const { signinUser } = useAuth();
    const navigate = useNavigate();
    const [showpasswordState, setPassState] = useState(false);
    const [showConPasswordState, setConPassState] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [passErrorState, setPassErrorState] = useState(false);
    const [conPassErrorState, setConPassErrorState] = useState(false);
    const passregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
    async function SignupHandler(e: any, username: string, email: string, password: string) {
        e.preventDefault();
        const response = await signinUser(username, email, password);
        console.log(response)
        if (response.success) {
            navigate("/");
        }
        else {
            setUsername("");
            setEmail("");
            setPassword("");
        }
    }
    useEffect(() => {
        if (confirmpassword === password) setConPassErrorState(false);
        else setConPassErrorState(true);
    }, [password, confirmpassword]);
    return (
        <div className="container-md">
            <form
                className="Login-box"
                onSubmit={(e) => SignupHandler(e, username, email, password)}
            >
                <div className="display-4">
                    <h1 className="white">SignUp </h1>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        required
                        type={showpasswordState ? "text" : "password"}
                        placeholder="Password"
                        className="form-control"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (passregex.test(e.target.value)) setPassErrorState(false);
                            else setPassErrorState(true);
                        }}
                    />
                    <div
                        className="password-state"
                        onClick={() => setPassState(!showpasswordState)}
                    >
                        {showpasswordState ? (
                            <i className="fas fa-eye-slash"></i>
                        ) : (
                            <i className="fas fa-eye"></i>
                        )}
                    </div>
                </div>
                <p className="error-desc"
                    style={{
                        display: passErrorState ? "block" : "none",
                    }}
                >
                    Password must be of 8-15 chararters
                </p>
                <p className="error-desc"
                    style={{
                        display: passErrorState ? "block" : "none",
                    }}
                >
                    With an Uppercase letter, a lowercase letter and a number.
                </p>

                <div className="input-group mb-3">
                    <input
                        required
                        type={showConPasswordState ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="form-control"
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div
                        className="password-state"
                        onClick={() => setConPassState(!showConPasswordState)}
                    >
                        {showConPasswordState ? (
                            <i className="fas fa-eye-slash"></i>
                        ) : (
                            <i className="fas fa-eye"></i>
                        )}
                    </div>
                </div>
                <p className="error-desc"
                    style={{
                        display: conPassErrorState ? "block" : "none",
                    }}
                >
                    Password doesn't match
        </p>
                <button
                    type="submit"
                    className={
                        conPassErrorState === false && passErrorState === false
                            ? "btn btn-dark center"
                            : "btn btn-dark center disabled "
                    }
                    disabled={conPassErrorState === true || passErrorState === true}
                >
                    Sign Up
        </button>
                <p className="text-explore">
                    Already a member?
          <Link to="/login" className="moveto-signup">
                        Log In
          </Link>
                </p>
                <br />
            </form>
        </div>
    );
};