import { createContext, useContext } from "react";
import { useFetchAnimes } from "../utils/hooks/useFetchAnimes";

export const ContextAPI = createContext();

export const StorageAnimes = ({ children }) => {
  const { animes, isLoading } = useFetchAnimes();

  function findAnimes(name) {
    if (animes) {
      const requestAnime = animes.find((anime) => anime.name === name);
      return requestAnime;
    }
  }

  return (
    <ContextAPI.Provider value={{ animes, isLoading, findAnimes }}>
      {children}
    </ContextAPI.Provider>
  );
};

export function useContextAPI() {
  const context = useContext(ContextAPI);

  return context;
}
