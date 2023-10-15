import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { vi } from 'vitest';
import * as APIModule from '../services/newsAPI';
import App from '../App';
import renderWithRouterAndRedux from '../utils/renderWithReduxAndRouter';
import { newsMockData, mockForLocalStorage } from './mock/mockData';
import setLocalStorage from '../utils/setLocalStorage';

const INITIAL_STATE = {
  news: [],
  favorites: mockForLocalStorage,
};

beforeEach(() => {
  window.localStorage.clear();
  setLocalStorage('favorites', mockForLocalStorage);
  vi.spyOn(APIModule, 'fetchNews').mockResolvedValue(newsMockData);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Teste das funcionalidades de notícias preferidas', () => {
  test('Teste se renderiza notícias favoritas', async () => {
    renderWithRouterAndRedux(<App />, '/favoritas', INITIAL_STATE);

    await waitForElementToBeRemoved(screen.getByText(/Carregando.../i));

    console.log(window.localStorage.getItem('favorites'));

    const news = screen.queryAllByTestId('newsCard');
    expect(news).toHaveLength(3);
  });

  test('Teste se o botão de favoritar funciona', async () => {
    const { user } = renderWithRouterAndRedux(<App />, '/', INITIAL_STATE);

    await waitForElementToBeRemoved(screen.getByText(/Carregando.../i));

    const favoriteButton = screen.getAllByTestId('favoriteButton')[0];
    expect(favoriteButton).toBeInTheDocument();

    await user.click(favoriteButton);

    const favorites = JSON.parse(window.localStorage.getItem('favorites') || '[]');
    expect(favorites).toHaveLength(4);
  });

  test('Teste se o botão de desfavoritar funciona', async () => {
    const { user } = renderWithRouterAndRedux(<App />, '/favoritas', INITIAL_STATE);

    await waitForElementToBeRemoved(screen.getByText(/Carregando.../i));

    const unfavoriteButton = screen.getAllByTestId('unfavoriteButton')[0];
    expect(unfavoriteButton).toBeInTheDocument();

    await user.click(unfavoriteButton);

    const favorites = JSON.parse(window.localStorage.getItem('favorites') || '[]');
    expect(favorites).toHaveLength(2);
  });
});
