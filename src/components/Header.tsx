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
                <HeaderButton id="signal" text="신호" path={"/signal"}/>
                <HeaderButton id="positon" text="포지션" path={"/position"}/>
                <HeaderButton id="history" text="기록" path={"#"}/>
                <HeaderButton id="revenue" text="수익" path={"#"}/>
                <HeaderButton id="assets" text="자산" path={"#"}/>
                <HeaderButton id="monitor" text="모니터" path={"#"}/>
            </div>
        </header>
    )
}

export default Header