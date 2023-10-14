import { useSelector } from 'react-redux';
import { ReduxState } from '../types';
import ReadNewsButton from './ReadNewsButton';
import FavoriteButton from './FavoriteButton';
import NewsPublicationDate from './NewsPublicationDate';
import {
  StyledMainNews,
  StyledMainNewsImg,
  MainNewsContainer,
  MainNewsHeader,
  MainNewsFooter,
  MainNewsAlert,
  MainNewsText,
} from '../styles/styles';

function MainNews() {
  const mainNews = useSelector((state: ReduxState) => state.news[0]);
  const imgURL = mainNews && `https://agenciadenoticias.ibge.gov.br/${JSON.parse(mainNews.imagens).image_intro}`;

  if (!mainNews) return <p>Carregando...</p>;

  return (
    <StyledMainNews>
      <StyledMainNewsImg src={ imgURL } alt={ mainNews.titulo } />
      <MainNewsContainer>
        <MainNewsHeader>
          <MainNewsAlert>Notícia mais recente</MainNewsAlert>
          <FavoriteButton id={ mainNews.id } />
        </MainNewsHeader>
        <h3>{mainNews.titulo}</h3>
        <MainNewsText>{mainNews.introducao}</MainNewsText>
        <MainNewsFooter>
          <NewsPublicationDate date={ mainNews.data_publicacao } />
          <ReadNewsButton link={ mainNews.link } />
        </MainNewsFooter>
      </MainNewsContainer>
    </StyledMainNews>
  );
}

export default MainNews;
