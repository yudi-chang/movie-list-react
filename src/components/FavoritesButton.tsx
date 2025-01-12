import { Movie } from '@/types/Movies';
import { RootState } from '@/state/store';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/state/hooks'
import { addFavorite, removeFavorite } from '@/state/movie/movieSlice';
import styles from "./FavoritesButton.module.scss";

const FavoritesButton = ({ movie }: {movie: Movie}) => {
  const dispatch = useAppDispatch()

  const favoriteIDs = useSelector((state: RootState) => state.movie.favoriteIDs);
  
  const isFavorite = movie.imdbID in favoriteIDs;

  const handleFavoritesClick = (): void => {
    if(!isFavorite) {
      dispatch(addFavorite(movie));
    } else {
      dispatch(removeFavorite(movie));
    }
  };

  return (
    <div className="wrapper">
      <button
        onClick={handleFavoritesClick}
        className={`${isFavorite ? styles['favorited'] : ''} ${styles['star-btn']}`}
        data-test="favorite-btn"
      >
        ★
      </button>
    </div>
  )
}

export default FavoritesButton