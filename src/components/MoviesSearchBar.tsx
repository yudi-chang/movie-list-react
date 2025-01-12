import React, { useCallback, useEffect, useRef } from "react";
import styles from "./MoviesSearchBar.module.scss";
import { useDebounce } from "@/hooks/useDebounce";
import { MoviesFetchPayload } from '@/types/Movies';

type SearchBarProps = {
  titleSearch: string;
  setTitleSearch: (search: string) => void;
  fetchMovies: (payload: MoviesFetchPayload) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ titleSearch, setTitleSearch, fetchMovies }) => {
  const fetchMoviesWithPayload = useCallback(() => {
    const payload: MoviesFetchPayload = {
      Title: titleSearch,
      page: 1,
    };
    fetchMovies(payload);
  }, [fetchMovies, titleSearch]);

  const debouncedSearch = useDebounce(fetchMoviesWithPayload, 450);

  // prevent re rendering
  const debouncedSearchRef = useRef(debouncedSearch);

  // update current deboounce
  useEffect(() => {
    debouncedSearchRef.current = debouncedSearch;
  }, [debouncedSearch]);

  // trigger debounce every title search update
  useEffect(() => {
    debouncedSearchRef.current();
  }, [titleSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleSearch(e.target.value);
    debouncedSearchRef.current();
  };

  return (
    <div className={`${styles["search-bar-wrapper"]} p-2`}>
      <input
        value={titleSearch}
        onChange={handleInputChange}
        data-test="search-field"
        placeholder="Search for a movie..."
      />
      <img src="/images/search-icon.png" alt="Search" />
    </div>
  );
};

export default SearchBar;
