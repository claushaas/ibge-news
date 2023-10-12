type ReadNewsButtonProps = {
  link: string;
};

function ReadNewsButton({ link }: ReadNewsButtonProps) {
  return (
    <a href={ link } target="_blank" rel="noreferrer">
      <button>Leia a notícia aqui</button>
    </a>
  );
}

export default ReadNewsButton;
