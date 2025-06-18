import "../css/HeaderButton.css"
interface HeaderButtonProps {
    id: string;
    text: string;
}

const HeaderButton = (prop:HeaderButtonProps) => {
    return (
            <button className={"header-button"} id={prop.id}>{prop.text}</button>
    )
}

export default HeaderButton