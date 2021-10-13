import {Link} from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import "./Header.css";
export const Header=()=>{
    const {isUserLogin,LogOut}=useAuth();
    return (
        <>
            <div className="navbar navbar-dark bg-dark">
                <Link to="/" className="header-link">
                    <span className="app-name">NEOQUIZ</span>
                </Link>
                {isUserLogin ? 
                    (<>
                        <Link to={`/profile/{email}`} className="header-link">
                            <i className="fas fa-user"></i>
                        </Link>
                        <Link to="/" className="header-link">
                            <button onClick={LogOut}>Logout</button>
                        </Link>
                    </>):(
                    <>
                        <Link to="/login" className="header-link">
                            <span>Login</span>
                        </Link>
                        <Link to="/signup" className="header-link">
                            <span>Signup</span>
                        </Link>
                    </>)
                    }
            </div>
        </>
    )
}
