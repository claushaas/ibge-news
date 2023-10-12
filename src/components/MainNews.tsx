import { MdFavoriteBorder } from 'react-icons/md';
import styled from 'styled-components';
import { News } from '../types';
import ReadNewsButton from './ReadNewsButton';

type MainNewsProps = {
  news: News;
};

const StyledMainNews = styled.div`
  display: flex;
`;

function MainNews({ news }: MainNewsProps) {
  const imgURL = news && `https://agenciadenoticias.ibge.gov.br/${JSON.parse(news.imagens).image_intro}`;

  if (!news) return <p>Carregando...</p>;

  return (
    <StyledMainNews>
      <img src={ imgURL } alt={ news.titulo } />
      <div>
        <p>Notícia mais recente</p>
        <MdFavoriteBorder />
        <h3>{news.titulo}</h3>
        <p>{news.introducao}</p>
        <p>{news.data_publicacao}</p>
        <ReadNewsButton link={ news.link } />
      </div>
    </StyledMainNews>
  );
}

export default MainNews;
