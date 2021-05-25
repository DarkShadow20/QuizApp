import {Link} from "react-router-dom";
import "./Header.css";
export const Header=()=>{
    return (
        <>
            <div className="navbar navbar-dark bg-dark">
                <Link to="/dashboard" className="header-link">
                    <p>NEOQUIZ</p>
                </Link>
            </div>
        </>
    )
}
