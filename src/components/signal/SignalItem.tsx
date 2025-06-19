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
                    <div className="signal-row">
                        <span>{signal.signalNumber}</span>
                        <span>{signal.symbol}</span>
                        <span>{signal.position}</span>
                        <span>{signal.kind}</span>
                    </div>
                    <div className="signal-row">
                        <span>{signal.price}</span>
                        <span>{signal.interval}</span>
                        <span>{signal.time}</span>
                        <span>{signal.intensity}</span>
                    </div>
                </li>
        </ul>

    )
}

export default SignalItem;