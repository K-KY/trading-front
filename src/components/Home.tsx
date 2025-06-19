import Header from "./Header.tsx";
import SignalBoard from "./signal/SignalBoard.tsx";
import {Route, Routes} from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path={"/signal"} element={<SignalBoard/>}></Route>
            </Routes>
        </div>
    )
}

export default Home;