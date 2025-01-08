"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Movie, MoviesFetchPayload } from '@/types/Movies';
import Movies from '@/components/Movies';
import Container from '@/components/Container';
import Pagination from "@mui/material/Pagination";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorFetching, setIsErrorFetching] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");
  const [page, setPage] = useState(1);

  const fetchMovies = async (payload: MoviesFetchPayload) => {
    try {
      setIsLoading(true);
      setIsErrorFetching(false);
      setCurrentTitle(payload?.Title || "");
      setPage(payload?.page || 1);

      const response = await axios.get("https://jsonmock.hackerrank.com/api/movies/search/", {
        params: payload,
      });

      setMovies(response.data.data as Movie[]);
      setTotalPages(response.data.total_pages as number);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      setIsErrorFetching(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    fetchMovies({
      Title: currentTitle,
      page: value,
    } as MoviesFetchPayload);
  }

  useEffect(() => {
    fetchMovies({});
  }, []);

  return (
    <div>
      <main>
        <Container>
          <Movies 
            movies={movies} 
            isLoading={isLoading} 
            isErrorFetching={isErrorFetching} 
            showUtilities={true} 
            title="Movies" 
          />
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange} 
            color="primary"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              '& .MuiPaginationItem-root': {
                color: '#fff',
              },
              '& .MuiPaginationItem-root.Mui-selected': {
                color: '#fff',
              },
            }}
          />
        </Container>
      </main>
    </div>
  );
}
