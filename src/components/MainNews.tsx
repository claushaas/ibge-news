import { MdFavoriteBorder } from 'react-icons/md';
import styled from 'styled-components';
import { News } from '../types';
import ReadNewsButton from './ReadNewsButton';

type MainNewsProps = {
  news: News;
};

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

function MainNews({ news }: MainNewsProps) {
  const imgURL = news && `https://agenciadenoticias.ibge.gov.br/${JSON.parse(news.imagens).image_intro}`;

  if (!news) return <p>Carregando...</p>;

  return (
    <StyledMainNews>
      <div>
        <StyledMainNewsImg src={ imgURL } alt={ news.titulo } />
      </div>
      <MainNewsContainer>
        <MainNewsHeader>
          <MainNewsAlert>Notícia mais recente</MainNewsAlert>
          <MdFavoriteBorder />
        </MainNewsHeader>
        <h3>{news.titulo}</h3>
        <MainNewsText>{news.introducao}</MainNewsText>
        <MainNewsFooter>
          <MainNewsText>{news.data_publicacao}</MainNewsText>
          <ReadNewsButton link={ news.link } />
        </MainNewsFooter>
      </MainNewsContainer>
    </StyledMainNews>
  );
}

export default MainNews;
