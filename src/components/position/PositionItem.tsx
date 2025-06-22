import "../../css/util/BoardUtil.css"
import PositionModal from "./PositionModal.tsx";
import {useState} from "react";

export interface Position {
    positionNumber: number,     //고유번호
    market: string,             //거래소
    position: string,           //진입 포지션
    symbol: string,             //코인 이름
    entrySignal: string,        //진입 신호
    entryIntensity: number,     //진입 신호 강도
    entryPrice: number,         //진입가
    currentPrice: number        //현재가
    margin: number,             //거래 금액
    leverage: number;           //레버리지
    liquidation: number;        //청산가격
    revenue: number,            //미실현 수익
    change: number,             //변동 퍼센트
    target: number,             //목표 수익
    stopLoss: number,           //손실 제한
    pyramiding: boolean         //수익중 스탑 로스 제한을 같이 올릴지 여부
}

const PositionItem = ({item} :{ item:Position}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    //중요한 정보만 보여주도록
    //상세 정보는 눌렀을 때 모달이나 다른 페이지로 처리

    //비중요 정보

    //positionNumber
    //marget
    //entrySignal 진입 신호
    //entryIntensity 진입 신호 강도
    //target
    //stopLoss
    //pyramiding

    //중요 정보

    //거래소
    //코인 이름 -> symbol
    //포지션 -> position
    //진입가 -> entryPrice
    //현재가 -> currentPrice
    //거래 금액 -> margin
    //수익률 -> revenue
    //변동률 -> change
    //청산 가격 -> liquidation
    return (
            <ul className={"board-list"}>
                <li  className={"board-card"} onClick={() => setIsModalOpen(true)}>
                    <div className={"board-item-row"}>
                        <div className={"item-content-container"}>이름 {item.symbol}</div>
                        <div className={"item-content-container"}>포지션 {item.position}</div>
                        <div className={"item-content-container"}>진입 가격 {item.entryPrice.toFixed(3)}</div>
                        <div className={"item-content-container"}>현재 가격 {item.currentPrice.toFixed(3)}</div>
                    </div>
                    <div className={"board-item-row"}>
                        <div className={"item-content-container"}>청산 가격 {item.liquidation.toFixed(3)}</div>
                        <div className={"item-content-container"}>거래 금액 {item.margin}</div>
                        <div className={"item-content-container"}>수익 {item.revenue}</div>
                        <div className={"item-content-container"}>변동 {item.change}</div>
                    </div>

                    <PositionModal items={item} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    </PositionModal>
                </li>
            </ul>
    )
}

export default PositionItem;