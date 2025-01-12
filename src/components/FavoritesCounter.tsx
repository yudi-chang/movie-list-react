import { RootState } from '@/state/store';
import { useSelector } from 'react-redux';
import styles from "./FavoritesCounter.module.scss";

const FavoritesCounter = () => {
  const favoritesCount = useSelector((state: RootState) => state.movie.favorites.length);
  
  return (
    <div className={`${styles['counter-wrapper']} text-xs`} data-test="counter-wrapper">
      { favoritesCount }
    </div>
  )
}

export default FavoritesCounter;