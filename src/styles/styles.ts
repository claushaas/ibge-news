import styled from 'styled-components';

export const StyledNewsGrid = styled.main`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 90%;
max-width: 1000px;
margin: 0 auto;
`;

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
