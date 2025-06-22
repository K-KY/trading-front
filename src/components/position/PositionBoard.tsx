import {useEffect, useState} from "react";
import PositionItem, {type Position} from "./PositionItem.tsx";

//모니터링 서버와 웹 소켓으로 연결 예정
const PositionBoard = () => {
    const [position, setPosition] = useState<Position[]>([])
    useEffect(() => {
        const positions = [];
        for (let i = 0; i < 100; i++) {
            const random = Math.floor(Math.random() * 2);

            const newPosition = {
                positionNumber: i,
                position: random == 1 ? "long" : "short",
                market: "BINANCE",
                symbol: random == 1 ? "BTCUSDT" : "ETHUSDT",
                entrySignal: "smGold",
                entryIntensity: 8,
                entryPrice: (Math.random() * 50000),
                currentPrice: Math.random() * 50000,
                margin: 894.23,
                liquidation:(Math.random() * 50000),
                leverage: Math.floor(Math.random() * 101),
                revenue: 10,
                change: 0,
                target: Math.floor(Math.random() * 20),
                stopLoss: 10,
                pyramiding: false,
            };
            positions.push(newPosition);
        }
        setPosition(positions);
    }, [])
    ;


    return (

        <>
            <div><h2>Position</h2></div>
            <div>
                {position.map((item, index) =>
                    <PositionItem item={item} key={index}></PositionItem>
                )}
            </div>
        </>

    )
}

export default PositionBoard