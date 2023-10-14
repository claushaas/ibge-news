import { StyledReadNewsButton } from '../styles/styles';

type ReadNewsButtonProps = {
  link: string;
};

function ReadNewsButton({ link }: ReadNewsButtonProps) {
  return (
    <a href={ link } target="_blank" rel="noreferrer">
      <StyledReadNewsButton>Leia a notícia aqui</StyledReadNewsButton>
    </a>
  );
}

export default ReadNewsButton;
