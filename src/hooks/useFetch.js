import { useEffect, useState } from "react";
import axios from "../api/axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        setData(null);
        setError(null);
        setIsLoading(true);

        const source = axios.CancelToken.source();

        axios.get(url, { cancelToken: source.token })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                if (axios.isCancel(error)) return;
                else if(!!error.response?.statusText) setError(error.response.statusText);
                else if (!!error.request?.statusText) setError(error.request.statusText);
                else setError(error.message);
            })
            /**
             * Due to the use of cancelToken in the axios option above
             * 2 same requests are sent to the server in StrictMode, which always results in 
             * CancelledError for the 1st request.
             * 
             * So, setIsLoading is set to false only if the request was not cancelled
             * (i.e. cancellation of 1st request will not affect 2nd request)
             */
            .finally(() => !axios.isCancel(source.token.reason) ? setIsLoading(false) : null);
        
        return () => { source.cancel(); }
    }, [url, refresh]);

    return {data, error, isLoading, setRefresh};
}

export default useFetch;