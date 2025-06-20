import "../../css/signal/SignalItem.css"

const SignalItemTitle = ({title}: { title: string }) => {
    if (title.toLowerCase() === "long") {
        return (
            <div className={"title-position-long item-title"}>{title}</div>
        )
    }
    if (title.toLowerCase() === "short") {
        return (
            <div className={"title-position-short item-title"}>{title}</div>
        )
    }
}

export default SignalItemTitle;