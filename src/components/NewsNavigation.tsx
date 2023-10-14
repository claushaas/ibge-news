import { StyledNavLink, StyledNav } from '../styles/styles';

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
