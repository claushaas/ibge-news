import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  display: flex;
  width: 100%;
`;

export const StyledLogo = styled.img`
  width: 80px;
`;

export const StyledNewsGrid = styled.main`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 90%;
max-width: 1000px;
margin: 0 auto;
`;

export const MoreNewsButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: 2px;
  padding: 0.5rem 1rem;
  margin: 1rem auto 2rem auto;
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.8rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const MoreNewsButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledFavoriteButtonEmpty = styled.button`
  background: none;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray}
  }
`;

export const StyledFavoriteButtonFull = styled(StyledFavoriteButtonEmpty)`
  color: ${({ theme }) => theme.colors.red};
`;

export const StyledMainNews = styled.aside`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
`;

export const StyledMainNewsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-basis: 450px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const MainNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  flex-basis: 450px;
`;

export const MainNewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainNewsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainNewsAlert = styled.p`
  color: red;
  font-size: 0.7rem;
`;

export const MainNewsText = styled.p`
  color: #333;
  font-size: 0.8rem;
`;

export const StyledNewsCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 300px;
  margin: 1rem 0;
  box-shadow: 0 2px 14px rgba(42, 42, 42, 0.24);
  border-radius: 3px;
`;

export const NewsCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FavoriteButtonContainer = styled.div`
  text-align: right;
  margin-top: 0.5rem;
`;

export const StyledNavLink = styled(NavLink)`
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

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0.6rem;
`;

export const StyledP = styled.p`
margin-bottom: 0;
`;

export const StyledReadNewsButton = styled.button`
background-color: ${({ theme }) => theme.colors.green};
border: none;
border-radius: 5px;
padding: 0.5rem 1rem;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

&:hover {
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray}
}
`;

export const StyledTitle = styled.h1`
color: ${({ theme }) => theme.colors.white};
font-size: 2rem;
align-self: center;
margin: auto;
font-family: 'Poller One', cursive;
text-transform: uppercase;
`;
