import "../../css/signal/SignalItem.css"

const SignalItemTitle = ({title}: { title: string }) => {
    if (title.toLowerCase() === "long") {
        return (
            <div className={"title-position-long"}>{title}</div>
        )
    }
    if (title.toLowerCase() === "short") {
        return (
            <div className={"title-position-short"}>{title}</div>
        )
    }
}

export default SignalItemTitle;