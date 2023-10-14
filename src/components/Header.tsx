import Logo from './Logo';
import Title from './Title';
import { StyledHeader } from '../styles/styles';

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Title />
    </StyledHeader>
  );
}

export default Header;
