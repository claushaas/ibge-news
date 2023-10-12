import styled from 'styled-components';
import logo from '../assets/logo_trybe_news.svg';

const StyledLogo = styled.img`
  width: 80px;
`;

function Logo() {
  return (
    <StyledLogo src={ logo } alt="Trybe News" />
  );
}

export default Logo;
