import { useState, useEffect } from "react";

//const API_URL = 'https://jsm-challenges.s3.amazonaws.com';
const API_URL = '/db/users.json';

function useFetch(endPoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetch(API_URL);
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      } catch(err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();

  }, [endPoint]);

  return {data, loading, error}
}

export default useFetch;