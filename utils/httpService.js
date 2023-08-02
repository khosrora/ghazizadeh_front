import axios from "axios";
import { BASE_API } from "./baseApi";

const app = axios.create({
    baseURL: BASE_API
});


const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch
}

export default http; 
