import {Link} from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import "./Header.css";
export const Header=()=>{
    const {isUserLogin,LogOut}=useAuth();
    return (
        <>
            <div className="navbar navbar-dark bg-dark">
                <Link to="/" className="header-link">
                    <p>NEOQUIZ</p>
                </Link>
                {isUserLogin ? 
                    (<>
                        <Link to="/" className="header-link">
                            <button onClick={LogOut}>Logout</button>
                        </Link>
                    </>):(
                    <>
                        <Link to="/login" className="header-link">
                            <p>Login</p>
                        </Link>
                        <Link to="/signup" className="header-link">
                            <p>Signup</p>
                        </Link>
                    </>)
                    }
            </div>
        </>
    )
}
