import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setData(response.data.data);

    return response;
  };

  return { data, setData, request, loading };
};

export default useApi;
