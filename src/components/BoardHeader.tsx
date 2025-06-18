import "../css/BoardHeader.css"

const BoardHeader = ({headers}: { headers: string[] }) => {
    return (
        <>
            <thead className={"board-header"}>
            <tr>
                {headers.map((header, index) => <th key={index}>{header}</th>)}
            </tr>
            </thead>
        </>
    )
}

export default BoardHeader;