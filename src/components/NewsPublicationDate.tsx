import moment from 'moment';
import 'moment/dist/locale/pt-br';
import { StyledP } from '../styles/styles';

type NewsPublicationDateProps = {
  date: string;
};

function NewsPublicationDate({ date }: NewsPublicationDateProps) {
  moment.locale('pt-br');
  const timeAgo = moment(date, 'DD-MM-YYYY HH:mm:ss')
    .fromNow();
  return (
    <StyledP>{timeAgo}</StyledP>
  );
}

export default NewsPublicationDate;
