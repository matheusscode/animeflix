import { useState, useEffect } from "react";
import { requestAPI } from "../../api/requestAPI";

export function useFetchAnimes() {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState();

  useEffect(() => {
    const fetchAnimes = async () => {
      const getAnimes = await requestAPI();
      setAnimes(getAnimes);
    };

    fetchAnimes();
    setIsLoading(false);
  }, []);

  return { animes, isLoading };
}
