import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Content-Type": "application/json"
    }
});

axiosInstance.CancelToken = axios.CancelToken;
axiosInstance.isCancel = axios.isCancel;

export default axiosInstance;