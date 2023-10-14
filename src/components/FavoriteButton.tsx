import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { StyledFavoriteButtonEmpty, StyledFavoriteButtonFull } from '../styles/styles';

type FavoriteButtonProps = {
  id: number;
};

function FavoriteButton({ id }: FavoriteButtonProps) {
  const favorites = useSelector((state: any) => state.favorites);
  const isFavoriteNews = favorites.includes(id);
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (!isFavoriteNews) {
      localStorage.setItem(
        'favorites',
        JSON.stringify([...JSON.parse(localStorage.getItem('favorites') || '[]'), id]),
      );
      dispatch({ type: 'ADD_FAVORITE', payload: id });
    } else {
      const filteredFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
        .filter(
          (favorite: number) => favorite !== id,
        );

      localStorage.setItem(
        'favorites',
        JSON.stringify(filteredFavorites),
      );
      dispatch({ type: 'REMOVE_FAVORITE', payload: id });
    }
  };

  if (!isFavoriteNews) {
    return (
      <StyledFavoriteButtonEmpty onClick={ handleFavoriteClick }>
        <MdFavoriteBorder />
      </StyledFavoriteButtonEmpty>
    );
  }

  return (
    <StyledFavoriteButtonFull onClick={ handleFavoriteClick }>
      <MdFavorite />
    </StyledFavoriteButtonFull>
  );
}

export default FavoriteButton;
