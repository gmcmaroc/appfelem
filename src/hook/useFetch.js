import { useState, useEffect } from "react";
import axios from "axios";
import * as Network from 'expo-network';


  const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState();

  const options = {
    method: "GET",
    url: `https://app.carrefourdemanutention.com/public/api/${endpoint}`,
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...query },
  };

  const fetchData = async () => {
      setIsLoading(true);
  
      try {
        const response = await axios.request(options);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
  };

  
    useEffect(() => {
      const checkConnectivity = async () => {
        const networkState = await Network.getNetworkStateAsync();
        setIsConnected(networkState.isConnected);
      };
      
      checkConnectivity();
      fetchData();
    }, []);

    const refetch = () => {
      setIsLoading(true);
      setTimeout(() => {
      fetchData();
      setIsLoading(false);
      }, 3000);
    };

  return { data, isLoading, error, isConnected, refetch };
};

export default useFetch;
