import {Link} from "react-router-dom";
import "./Header.css";
export const Header=()=>{
    return (
        <>
            <div className="navbar navbar-dark bg-dark">
                <Link to="/" className="header-link">
                    <p>NEOQUIZ</p>
                </Link>
                <Link to="/login" className="header-link">
                    <p>Login</p>
                </Link>
                <Link to="/signup" className="header-link">
                    <p>Signup</p>
                </Link>
            </div>
        </>
    )
}
