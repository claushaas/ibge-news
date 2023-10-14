import moment from 'moment';
import 'moment/dist/locale/pt-br';
import styled from 'styled-components';

type NewsPublicationDateProps = {
  date: string;
};

const StyledP = styled.p`
  margin-bottom: 0;
`;

function NewsPublicationDate({ date }: NewsPublicationDateProps) {
  moment.locale('pt-br');
  const timeAgo = moment(date, 'DD-MM-YYYY HH:mm:ss')
    .fromNow();
  return (
    <StyledP>{timeAgo}</StyledP>
  );
}

export default NewsPublicationDate;
