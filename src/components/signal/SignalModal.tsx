import {useEffect} from "react";
import type {Signal} from "./SignalItem.tsx";
import SignalItemTitle from "./SignalItemTitle.tsx";
type ModalProps = {
    isOpen: boolean,
    onClose: () => void,
    // children: React.ReactNode,
    items: Signal
};

const SignalModal = ({isOpen, onClose, items}: ModalProps) => {
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
                    <SignalItemTitle title={items.position}></SignalItemTitle>
                    <div className="board-item-row">
                        <div className={"item-content-container"}>
                            <span><span className={"item-content-title"}>신호 번호 : </span>{items.signalNumber}</span>
                        </div>
                        <div className={"item-content-container"}>
                            <span><span className={"item-content-title"}>종목 : </span>{items.symbol}</span>
                        </div>
                        <div className={"item-content-container"}>
                            <span><span className={"item-content-title"}>포지션 : </span>{items.position}</span>
                        </div>
                        <div className={"item-content-container"}>
                            <span><span className={"item-content-title"}>신호 종류 : </span>{items.kind}</span>
                        </div>
                    </div>
                    <div className="board-item-row">
                        <div className={"item-content-container"}>
                            <span><span className={"item-content-title"}>가격 : </span>{items.price}</span>
                        </div>
                        <div className={"item-content-container"}>
                            <span>{items.interval} <span className={"item-content-title"}>봉</span></span>
                        </div>
                        <div className={"item-content-container"}>
                            <span><span className={"item-content-title"}>발생시간 : </span>{items.time}</span>
                        </div>
                        <div className={"item-content-container"}>
                            <span><span className={"item-content-title"}>신호 강도 : </span>{items.intensity}</span>
                        </div>
                    </div>

                    <button>구매</button>
                </div>
            </div>

        </div>
    );
};

export default SignalModal;