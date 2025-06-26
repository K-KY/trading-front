import {useEffect, useState} from "react";
import {getWorkers} from "../api/axios/MonitorService.ts";
import type {Worker} from "../interface/Worker.ts";
import MonitorItem from "./MonitorItem.tsx";

const MonitorBoard = () => {
    const [workers, setWorkers] = useState<Worker[]>([])

    const fetchWorkers = async () => {
        const response = await getWorkers();
        setWorkers(response)
    }
    useEffect(() => {
        fetchWorkers()
    }, []);
    console.log(workers);
    return (
        <>
            <div>
                <div>
                    {workers.map((worker: Worker) =>
                        <MonitorItem worker={worker} key={worker.ident} />
                    )}
                </div>
            </div>


        </>
    )
}

export default MonitorBoard;