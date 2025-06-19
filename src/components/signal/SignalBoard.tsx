import {useEffect, useState} from "react";
import SignalItem, {type Signal} from "./SignalItem.tsx";
import "../../css/signal/SignalBoard.css"
// import BoardHeader from "../BoardHeader.tsx";
//
// const headers: string[] = ["번호", "이름", "포지션", "종류", "가격", "간격", "발생일", "강도"]//DB에서 가져올 값

const SignalBoard = () => {
    const [signal, setSignal] = useState<Signal[]>([//DB && 메세지 큐
    ])

    useEffect(() => {
        const signals = [];

        for (let i = 0; i < 100; i++) {
            const random = Math.floor(Math.random() * 2);
            const newSignal = {
                signalNumber: Math.round(Math.random() * 10000000),
                symbol: "BTCUSDT",
                position: random == 1 ? "long": "short",
                kind: "smGold",
                price: 123456,
                interval: "1d",
                time: "2025-05-01",
                intensity: 8
            };
            signals.push(newSignal);
        }

        setSignal(signals); // ✅ 단 한 번에 설정
    }, []);

    return (
            // <table className={"signal-table"}>
            //     <BoardHeader headers={headers}/>
            //     {signal.map((signal) => <SignalItem key={signal.signalNumber} signal={signal}/>)}
            // </table>

        <>
            {signal.map((signal) => <SignalItem key={signal.signalNumber} signal={signal}/>)}
        </>
    )
}

export default SignalBoard;