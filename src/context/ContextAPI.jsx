import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { requestAPI } from "../services/requestAPI";

export const ContextAPI = createContext();

export const StorageAnimes = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAnimes = async () => {
      const getAnimes = await requestAPI();
      setAnimes(getAnimes);
    };

    fetchAnimes();
    setIsLoading(false);
  }, []);

  const findAnimes = (name) => {
    if (animes) {
      const requestAnime = animes.find((anime) => anime.name === name);
      return requestAnime;
    }
  };

  const onChangeHandler = (e) => {
    setSearch(search);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  const onSearchHandler = async (anime) => {
    if (!anime) {
      fetchAnimes();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchAnime(anime);
    if (!result) {
      setNotFound(true);
    } else {
      setAnimes([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  return (
    <ContextAPI.Provider
      value={{
        animes,
        isLoading,
        findAnimes,
        onLeftClickHandler,
        onRightClickHandler,
        page,
        totalPages,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
};

export function useContextAPI() {
  const context = useContext(ContextAPI);

  return context;
}
