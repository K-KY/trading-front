import type {Worker} from "../interface/Worker.ts";
import "../../css/util/BoardUtil.css"
import MonitorItemTitle from "./MonitorItemTitle.tsx";
import MonitorPrice from "./MonitorPrice.tsx";


const MonitorItem = ({worker} : {worker:Worker}) => {
    return (
        <ul className={"board-list"}>
            <li  className={"board-card"}>
                <MonitorItemTitle title={worker.name}/>
                <div className={"board-item-row"}>
                    <div className={"item-content-container"}><span className={"item-content-title"}>코인</span> {worker.coin}</div>
                    <div className={"item-content-container"}><span className={"item-content-title"}>감시 간격</span> {worker.interval}</div>
                    <div className={"item-content-container"}><span className={"item-content-title"}>상태</span> {worker.alive?"ON":"OFF"}</div>
                    <div>
                        <MonitorPrice name={worker.name}></MonitorPrice>
                    </div>
                </div>
            </li>
        </ul>

    )
}

export default MonitorItem;