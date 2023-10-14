import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReduxState } from '../types';
import NewsCard from './NewsCard';
import isFavorite from '../utils/isFavorite';

const StyledNewsGrid = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
`;

function NewsGrid() {
  const [newsQuantity, setNewsQuantity] = useState(10);
  const allNews = useSelector((state: ReduxState) => state.news);
  const { pathname } = useLocation();

  useEffect(() => {
    setNewsQuantity(10);
  }, [pathname]);

  const handleMoreNewsClick = () => {
    setNewsQuantity((prevState) => prevState + 9);
  };

  return (
    <>
      <StyledNewsGrid>
        {
        allNews
          .filter((news) => {
            switch (pathname) {
              case '/release':
                return news.tipo === 'Release';
              case '/noticias':
                return news.tipo === 'Notícia';
              case '/favoritas':
                return isFavorite(news.id);
              default:
                return true;
            }
          })
          .slice(
            1,
            newsQuantity,
          ).map((news) => (
            <NewsCard key={ news.id } news={ news } />
          ))
      }
      </StyledNewsGrid>
      <button onClick={ handleMoreNewsClick }>
        Mais Notícias
      </button>
    </>
  );
}

export default NewsGrid;
