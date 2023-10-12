import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  align-self: center;
  margin: auto;
  font-family: 'Poller One', cursive;
  text-transform: uppercase;
`;

function Title() {
  return (
    <StyledTitle>
      Trybe News
    </StyledTitle>
  );
}

export default Title;
