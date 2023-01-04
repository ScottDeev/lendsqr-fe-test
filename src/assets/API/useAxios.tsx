import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1';

const useAxios = ({ url, headers = null }:any) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');



    useEffect(() => {
        const fetchData = () => {
            axios.get(url, JSON.parse(headers))
                .then((res:any) => {
                    setResponse(res.data);
                })
                .catch((err:any) => {
                    setError(err);
                })
        };
        fetchData()
    }, [url, headers]);

    return { response, error };
};

export default useAxios;