import "../css/HeaderButton.css"
import {Link, useLocation} from "react-router-dom";
interface HeaderButtonProps {
    id: string;
    text: string;
    path: string;
}

const HeaderButton = (prop:HeaderButtonProps) => {
    const location = useLocation();
    const isActive = location.pathname === prop.path;

    return (
        <Link
            to={prop.path}
            className={`header-button ${isActive ? "active" : ""}`}
            id={prop.id}
        >
            <button className={"header-button"} id={prop.id}>
                {prop.text}
            </button>
        </Link>
    )
}

export default HeaderButton