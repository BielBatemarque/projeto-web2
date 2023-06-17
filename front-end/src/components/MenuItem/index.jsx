import './MenuItem.css';
import { Link } from "react-router-dom";

export const MenuItem = ({ text, linkl }) =>{
    return(
        <Link to={linkl} className="link">{text}</Link>
    );
}