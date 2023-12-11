import { useEffect, useState } from "react";

export function useFetch(fetchFunc, initialValue) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const datas = await fetchFunc();
        setFetchedData(datas);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch datas",
        });
      }
      setIsLoading(false);
    }

    fetchData();
  }, [fetchFunc]);

  return {
    isLoading,
    error,
    setFetchedData,
    fetchedData,
  };
}
