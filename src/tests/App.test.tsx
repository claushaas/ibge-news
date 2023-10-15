import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { vi } from 'vitest';
import * as APIModule from '../services/newsAPI';
import App from '../App';
import renderWithRouterAndRedux from '../utils/renderWithReduxAndRouter';
import { newsMockData } from './mock/mockData';

beforeEach(() => {
  vi.spyOn(APIModule, 'fetchNews').mockResolvedValue(newsMockData);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Teste se a aplicação funciona', () => {
  test('Teste se renderiza os componentes principais da página', async () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();

    await waitForElementToBeRemoved(screen.getByText(/Carregando.../i));

    const title = screen.getByRole('heading', {
      name: /trybe news/i,
    });
    expect(title).toBeInTheDocument();

    const mainNews = screen.getByRole('complementary');
    expect(mainNews).toBeInTheDocument();

    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();

    const newsGrid = screen.getByRole('main');
    expect(newsGrid).toBeInTheDocument();

    const news = screen.getAllByTestId('newsCard');
    expect(news).toHaveLength(9);
  });

  test('Teste se os botões de navegação funcionam', async () => {
    const { user } = renderWithRouterAndRedux(<App />);
    expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();

    await waitForElementToBeRemoved(screen.getByText(/Carregando.../i));

    const releaseButton = screen.getByRole('link', {
      name: /release/i,
    });
    await user.click(releaseButton);
    expect(window.location.pathname).toBe('/release');

    const newsButton = screen.getByRole('link', {
      name: /notícias/i,
    });
    await user.click(newsButton);
    expect(window.location.pathname).toBe('/noticias');

    const favoritesButton = screen.getByRole('link', {
      name: /favoritas/i,
    });
    await user.click(favoritesButton);
    expect(window.location.pathname).toBe('/favoritas');

    const recentNewsButton = screen.getByRole('link', {
      name: /mais recentes/i,
    });
    await user.click(recentNewsButton);
    expect(window.location.pathname).toBe('/');
  });

  test('Teste se o botão Mais Notícias funciona', async () => {
    const { user } = renderWithRouterAndRedux(<App />);
    expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();

    await waitForElementToBeRemoved(screen.getByText(/Carregando.../i));

    const moreNewsButton = screen.getByRole('button', {
      name: /mais notícias/i,
    });
    await user.click(moreNewsButton);
    expect(screen.getAllByTestId('newsCard')).toHaveLength(16);
  });
});
