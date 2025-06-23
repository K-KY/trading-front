import "../../css/signal/SignalItem.css"
import "../../css/util/BoardUtil.css"
import SignalItemTitle from "./SignalItemTitle.tsx";
import {useState} from "react";
import SignalModal from "./SignalModal.tsx";

export interface Signal {
    signalNumber: number;
    symbol: string,
    position: string,
    kind: string,
    price: number,
    interval: string,
    time: string,
    intensity: number,
}

const SignalItem = ({signal}: { signal: Signal }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <ul className="board-list">
            <li key={signal.signalNumber} className="board-card" onClick={() => setIsModalOpen(true)}>
                <SignalItemTitle title={signal.position}></SignalItemTitle>
                <div className="board-item-row">
                    <div className={"item-content-container"}>
                        <span><span className={"item-content-title"}>신호 번호 : </span>{signal.signalNumber}</span>
                    </div>
                    <div className={"item-content-container"}>
                        <span><span className={"item-content-title"}>종목 : </span>{signal.symbol}</span>
                    </div>
                    <div className={"item-content-container"}>
                        <span><span className={"item-content-title"}>포지션 : </span>{signal.position}</span>
                    </div>
                    <div className={"item-content-container"}>
                        <span><span className={"item-content-title"}>신호 종류 : </span>{signal.kind}</span>
                    </div>
                </div>
                <div className="board-item-row">
                    <div className={"item-content-container"}>
                        <span><span className={"item-content-title"}>가격 : </span>{signal.price}</span>
                    </div>
                    <div className={"item-content-container"}>
                        <span>{signal.interval} <span className={"item-content-title"}>봉</span></span>
                    </div>
                    <div className={"item-content-container"}>
                        <span><span className={"item-content-title"}>발생시간 : </span>{signal.time}</span>
                    </div>
                    <div className={"item-content-container"}>
                        <span><span className={"item-content-title"}>신호 강도 : </span>{signal.intensity}</span>
                    </div>
                </div>
                <SignalModal items={signal} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></SignalModal>
            </li>
        </ul>

    )
}

export default SignalItem;