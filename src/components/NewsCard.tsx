import styled from 'styled-components';
import { News } from '../types';
import FavoriteButton from './FavoriteButton';
import ReadNewsButton from './ReadNewsButton';
import NewsPublicationDate from './NewsPublicationDate';

type NewsCardProps = {
  news: News;
};

const StyledNewsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 300px;
`;

const NewsCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function NewsCard({ news }: NewsCardProps) {
  return (
    <StyledNewsCard>
      <h6>{news.titulo}</h6>
      <p>{news.introducao}</p>
      <NewsCardFooter>
        <NewsPublicationDate date={ news.data_publicacao } />
        <ReadNewsButton link={ news.link } />
      </NewsCardFooter>
      <FavoriteButton id={ news.id } />
    </StyledNewsCard>
  );
}

export default NewsCard;
