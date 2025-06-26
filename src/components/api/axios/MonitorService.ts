import axios from "axios";
import {baseURL} from "./BaseURL.ts";


const getWorkers = async() => {
    return await axios.get(baseURL+'/workers')
        .then(response => response.data)
        .catch(error => console.log(error));
}


export {getWorkers}