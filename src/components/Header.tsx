import "../css/Header.css"
import HeaderButton from "./HeaderButton.tsx";
//매매신호, 포지션, 기록, 수익률
//버튼들 디비에서 가져올거
    //버튼을 디비에서 가져오는게 맞을까? 보류
//화면이 작은경우 버튼 사이즈 그대로라 UI 고장남
const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img id="logo" src="vite.svg" alt="logo"/>
            </div>
            <div className={"header-content"}>
                <HeaderButton id="btn_1" text="신호"/>
                <HeaderButton id="btn_2" text="포지션"/>
                <HeaderButton id="btn_3" text="기록"/>
                <HeaderButton id="btn_4" text="수익"/>
                <HeaderButton id="btn_5" text="자산"/>
                <HeaderButton id="btn_6" text="모니터"/>
            </div>
        </header>
    )
}

export default Header