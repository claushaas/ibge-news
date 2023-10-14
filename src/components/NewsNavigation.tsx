import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 0.8rem;
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  margin: 0 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #333;
    color: #fff;
  }

  &.active {
    background-color: #333;
    color: #fff;
  }
`;

function NewsNavigation() {
  return (
    <nav>
      <StyledNavLink to="/">Mais Recentes</StyledNavLink>
      <StyledNavLink to="/release">Release</StyledNavLink>
      <StyledNavLink to="/noticias">Notícias</StyledNavLink>
      <StyledNavLink to="/favoritas">Favoritas</StyledNavLink>
    </nav>
  );
}

export default NewsNavigation;
