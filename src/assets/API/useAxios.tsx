import { useState, useEffect } from 'react';

const baseURL = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1';

const useAxios = ({ url }:any) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');



    useEffect(() => {
        const fetchData = () => {
            fetch(`${baseURL}${url}`)
                .then((res:any) => {
                    setResponse(res.data);
                })
                .catch((err:any) => {
                    setError(err);
                })
        };
        fetchData()
        console.log(`${baseURL}${url}`);
    }, [url]);

    return { response, error };
};

export default useAxios;