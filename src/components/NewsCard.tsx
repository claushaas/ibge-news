import { News } from '../types';
import FavoriteButton from './FavoriteButton';
import ReadNewsButton from './ReadNewsButton';
import NewsPublicationDate from './NewsPublicationDate';
import {
  StyledNewsCard,
  NewsCardFooter,
  FavoriteButtonContainer,
} from '../styles/styles';

type NewsCardProps = {
  news: News;
};

function NewsCard({ news }: NewsCardProps) {
  return (
    <StyledNewsCard data-testid="newsCard">
      <h6>{news.titulo}</h6>
      <p>{news.introducao}</p>
      <NewsCardFooter>
        <NewsPublicationDate date={ news.data_publicacao } />
        <ReadNewsButton link={ news.link } />
      </NewsCardFooter>
      <FavoriteButtonContainer>
        <hr />
        <FavoriteButton id={ news.id } />
      </FavoriteButtonContainer>
    </StyledNewsCard>
  );
}

export default NewsCard;
