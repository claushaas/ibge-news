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

it('should show "Vite + React + Trybe" text', async () => {
  renderWithRouterAndRedux(<App />);
  expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();

  await waitForElementToBeRemoved(screen.getByText(/Carregando.../i));

  screen.debug();
});
