import styled from 'styled-components';
import Logo from './Logo';
import Title from './Title';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  display: flex;
  width: 100%;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Title />
    </StyledHeader>
  );
}

export default Header;
