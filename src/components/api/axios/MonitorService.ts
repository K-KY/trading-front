import axios from "axios";
import {baseURL} from "./BaseURL.ts";


const getWorkers = async() => {
    try {
        const response = await axios.get(baseURL + '/workers');
        return response.data;
    } catch (error) {
        console.error("getWorkers 에러:", error);
        throw error; // 상위에서 처리하도록 예외 던짐
    }
}


export {getWorkers}