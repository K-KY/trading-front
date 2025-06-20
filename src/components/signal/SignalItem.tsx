import "../../css/signal/SignalItem.css"
import SignalItemTitle from "./SignalItemTitle.tsx";

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
    function click() {
        console.log("click")
    }
    return (
        // <tbody>
        //
        //         <tr className="signal-item bg-lGrey">
        //         <td>
        //             {signal.signalNumber}
        //         </td>
        //         <td>
        //             {signal.symbol}
        //         </td>
        //         <td>
        //             {signal.position}
        //         </td>
        //         <td>
        //             {signal.kind}
        //         </td>
        //         <td>
        //             {signal.price}
        //         </td>
        //         <td>
        //             {signal.interval}
        //         </td>
        //         <td>
        //             {signal.time}
        //         </td>
        //         <td>
        //             {signal.intensity}
        //         </td>
        //     </tr>
        //
        // </tbody>
        <ul className="signal-list">
            <li key={signal.signalNumber} className="signal-card">
                <SignalItemTitle title={signal.position}></SignalItemTitle>
                <div className="signal-row" onClick ={() => click()}>
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
                <div className="signal-row">
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
            </li>
        </ul>

    )
}

export default SignalItem;