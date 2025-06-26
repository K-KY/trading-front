import {useEffect, useRef, useState} from "react";

const MonitorPrice = ({name} : {name : string}) => {
    const ws = useRef<WebSocket | null>(null); // WebSocket 타입 명시

    const [price, setPrice] = useState(0)
    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:8000/monitor-price?worker="+`${name}`);
        ws.current.onopen = () => {
            console.log("웹소켓 연결됨");
        };
        ws.current.onmessage = (event) => {
            setPrice(event.data);
            console.log("수신:", event.data);
        };
        ws.current.onclose = () => {
            console.log("연결 종료됨");
        };
        return () => {
            ws.current?.close(); // 안전하게 종료
        };
    }, []);
    return (
        <>
            <h2>{price}</h2>
        </>
    )
}
export default MonitorPrice;