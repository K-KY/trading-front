import Header from "./Header.tsx";
import SignalBoard from "./signal/SignalBoard.tsx";
import {Route, Routes} from "react-router-dom";
import PositionBoard from "./position/PositionBoard.tsx";
import MonitorBoard from "./monitor/MonitorBoard.tsx";



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path={"/"}></Route>
                <Route path={"/signal"} element={<SignalBoard/>}></Route>
                <Route path={"/position"} element={<PositionBoard/>}></Route>
                <Route path={"/monitor"} element={<MonitorBoard></MonitorBoard>}></Route>
            </Routes>
        </div>
    )
}

export default Home;