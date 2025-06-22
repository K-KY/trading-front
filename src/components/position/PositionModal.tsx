import "../../css/signal/PositionModal.css";
// import * as React from "react";
import type {Position} from "./PositionItem.tsx";
import {useEffect} from "react";

type ModalProps = {
    isOpen: boolean,
    onClose: () => void,
    // children: React.ReactNode,
    items: Position
};

const PositionModal = ({isOpen, onClose, items}: ModalProps) => {

    useEffect(() => {
        const preventScroll = (e: Event) => {
            e.preventDefault();
        };

        const preventKeyScroll = (e: KeyboardEvent) => {
            const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"];
            if (keys.includes(e.key)) e.preventDefault();
        };

        if (isOpen) {
            window.addEventListener("wheel", preventScroll, { passive: false });
            window.addEventListener("touchmove", preventScroll, { passive: false });
            window.addEventListener("keydown", preventKeyScroll, { passive: false });
        }

        // ✅ cleanup 함수 추가
        return () => {
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
            window.removeEventListener("keydown", preventKeyScroll);
        };
    }, [isOpen]);


        useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
        }
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div onClick={(e) => e.stopPropagation()}>
            <div className="modal-overlay" onClick={() => onClose()}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={() => onClose()}>X</button>
                    <h2>상세 정보</h2>
                    <p><strong>포지션 번호 : </strong> {items.positionNumber}</p>
                    <p><strong>거래소 : </strong> {items.market}</p>
                    <p><strong>포지션 : </strong> {items.position}</p>
                    <p><strong>거래 종목 : </strong> {items.symbol}</p>
                    <p><strong>진입 신호 : </strong> {items.entrySignal}</p>
                    <p><strong>진입 강도 : </strong> {items.entryIntensity}</p>
                    <p><strong>진입 가격 : </strong> {items.entryPrice}</p>
                    <p><strong>현재 가격 : </strong> {items.currentPrice}</p>
                    <p><strong>거래 금액 : </strong> {items.margin}</p>
                    <p><strong>레버리지 : </strong> {items.leverage}x</p>
                    <p><strong>청산 금액 : </strong> {items.liquidation}</p>
                    <p><strong>수익 : </strong> {items.revenue}</p>
                    <p><strong>변동 : </strong> {items.change}%</p>
                    <p><strong>목표 수익 : </strong> {items.target}%</p>
                    <p><strong>손절 가격 : </strong> {items.stopLoss}</p>
                    <p><strong>피라미딩 : </strong> {items.pyramiding ? "true" : "false"}</p>
                    {/* 더 많은 상세 정보 가능 */}
                </div>
            </div>

        </div>
    );
};
// positionNumber: number,     //고유번호
//     market: string,             //거래소
//     position: string,           //진입 포지션
//     symbol: string,             //코인 이름
//     entrySignal: string,        //진입 신호
//     entryIntensity: number,     //진입 신호 강도
//     entryPrice: number,         //진입가
//     currentPrice: number        //현재가
// margin: number,             //거래 금액
//     leverage: number;           //레버리지
// liquidation: number;        //청산가격
// revenue: number,            //미실현 수익
//     change: number,             //변동 퍼센트
//     target: number,             //목표 수익
//     stopLoss: number,           //손실 제한
//     pyramiding: boolean         //수익중 스탑 로스 제한을 같이 올릴지 여부

export default PositionModal;
