import { News } from '../types';
import FavoriteButton from './FavoriteButton';
import ReadNewsButton from './ReadNewsButton';

type NewsCardProps = {
  news: News;
};

function NewsCard({ news }: NewsCardProps) {
  return (
    <div>
      <h5>{news.titulo}</h5>
      <p>{news.introducao}</p>
      <p>{news.data_publicacao}</p>
      <ReadNewsButton link={ news.link } />
      <FavoriteButton />
    </div>
  );
}

export default NewsCard;
