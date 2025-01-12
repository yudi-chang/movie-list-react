import Image from 'next/image';
import { Movie } from '@/types/Movies';
import styles from "./Movies.module.scss";
import FavoritesButton from '@/components/FavoritesButton';

type MoviesProps = {
  movies: Movie[]
  isLoading: boolean
  isErrorFetching: boolean
  showUtilities?: boolean
  title?: string
}

export default function Movies({
  movies,
  isLoading,
  isErrorFetching,
  showUtilities = true,
  title = 'Movies'
}: MoviesProps) {

  if(isErrorFetching) {
    return (
      <div className={styles['error-message']} data-test="error-message-wrapper">
        <img src="/images/error-logo.png" alt="Unexpected error image" />
        <h2 className="mb-12 text-xl fw-bold">Oops something went wrong</h2>
        <div className={styles['message']}>An unexpected error has occured. please try again or contact support if the error persists</div>
        {/* <button @click="retry()" className="mt-20" data-test="retry-btn">
          Try again
        </button> */}
      </div>
    );
  } else if (isLoading) {
    return (
      <div>isLoading</div>
    )
  } else if(movies.length === 0) {
    return (
      <div>Empty Movie</div>
    )
  }

  return (
    <div>
      <h1 className="mb-7 text-3xl font-bold">{title}</h1>
      <div className={`${styles['movies']} my-10`} data-test="movies-list">
        {
          movies.map((movie) => (
            <div key={movie.imdbID} className={styles['movie-card']} data-test="movie-item">
              <div key={movie.imdbID} className={styles['movie-img']}>
                <Image
                  src={`https://placehold.co/400x500/34495e/FFF.png?text=${movie.Title.slice(0, 10).replace(/ /g, '+')}`}
                  alt={`Image of ${movie.Title.slice(0, 10)}`}
                  width={400}
                  height={500}
                  layout="responsive"
                  loading="lazy"
                />
                <div className={`${styles['fav-btn']}`}>
                  <FavoritesButton movie={movie}/>
                </div>
              </div>
              <div className={`${styles['movie-info']} text-md font-bold py-5 px-4`}>
                <h2>{ movie.Title }</h2>
                <div className={styles['additional-info']}>
                  <a
                    href={`https://www.imdb.com/title/${movie.imdbID}/`}
                    target="_blank" className={`${styles['imdb-info']} text-sm py-1 px-3`}
                  > 
                    IMDb: { movie.imdbID }
                  </a>
                  <div className={`${styles['year-info']} text-sm my-3 py-1 px-3`}>Release: { movie.Year }</div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
