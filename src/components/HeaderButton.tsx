import "../css/HeaderButton.css"
import {Link} from "react-router-dom";
interface HeaderButtonProps {
    id: string;
    text: string;
    path: string;
}

const HeaderButton = (prop:HeaderButtonProps) => {
    return (
        <Link to={prop.path}><button className={"header-button"} id={prop.id}>{prop.text}</button></Link>
    )
}

export default HeaderButton