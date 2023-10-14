import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReduxState } from '../types';
import ReadNewsButton from './ReadNewsButton';
import FavoriteButton from './FavoriteButton';

const StyledMainNews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
`;

const StyledMainNewsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-basis: 450px;
`;

const MainNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  flex-basis: 450px;
`;

const MainNewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainNewsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainNewsAlert = styled.p`
  color: red;
  font-size: 0.7rem;
`;

const MainNewsText = styled.p`
  color: #333;
  font-size: 0.8rem;
`;

function MainNews() {
  const mainNews = useSelector((state: ReduxState) => state.news[0]);
  const imgURL = mainNews && `https://agenciadenoticias.ibge.gov.br/${JSON.parse(mainNews.imagens).image_intro}`;

  if (!mainNews) return <p>Carregando...</p>;

  return (
    <StyledMainNews>
      <div>
        <StyledMainNewsImg src={ imgURL } alt={ mainNews.titulo } />
      </div>
      <MainNewsContainer>
        <MainNewsHeader>
          <MainNewsAlert>Notícia mais recente</MainNewsAlert>
          <FavoriteButton />
        </MainNewsHeader>
        <h3>{mainNews.titulo}</h3>
        <MainNewsText>{mainNews.introducao}</MainNewsText>
        <MainNewsFooter>
          <MainNewsText>{mainNews.data_publicacao}</MainNewsText>
          <ReadNewsButton link={ mainNews.link } />
        </MainNewsFooter>
      </MainNewsContainer>
    </StyledMainNews>
  );
}

export default MainNews;
