import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReduxState } from '../types';
import NewsCard from './NewsCard';
// import isFavorite from '../utils/isFavorite';

const StyledNewsGrid = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
`;

function NewsGrid() {
  const allNews = useSelector((state: ReduxState) => state.news);
  const favorites = useSelector((state: ReduxState) => state.favorites);
  const favoritesNews = allNews.filter((news) => favorites.includes(news.id));

  return (
    <StyledNewsGrid>
      {
        favoritesNews && favoritesNews.length > 0
          ? favoritesNews.map((news) => (
            <NewsCard key={ news.id } news={ news } />
          )) : null
      }
    </StyledNewsGrid>
  );
}

export default NewsGrid;
