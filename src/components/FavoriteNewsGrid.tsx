import { useSelector } from 'react-redux';
import { ReduxState } from '../types';
import NewsCard from './NewsCard';
import { StyledNewsGrid } from '../styles/styles';

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
