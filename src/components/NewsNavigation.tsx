import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-family: 'Popins', sans-serif;
  font-size: 0.8rem;
  margin: 0 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }

  &.active {
    border-bottom: 1px solid red;
  }
`;

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0.6rem;
`;

function NewsNavigation() {
  return (
    <StyledNav>
      <StyledNavLink to="/">Mais Recentes</StyledNavLink>
      <StyledNavLink to="/release">Release</StyledNavLink>
      <StyledNavLink to="/noticias">Notícias</StyledNavLink>
      <StyledNavLink to="/favoritas">Favoritas</StyledNavLink>
    </StyledNav>
  );
}

export default NewsNavigation;
