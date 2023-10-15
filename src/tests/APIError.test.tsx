import { vi } from 'vitest';
import * as APIModule from '../services/newsAPI';
import App from '../App';
import renderWithRouterAndRedux from '../utils/renderWithReduxAndRouter';

beforeEach(() => {
  vi.spyOn(APIModule, 'fetchNews').mockRejectedValue('Erro ao carregar notícias');
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Teste de erros', () => {
  test('Teste se renderiza mensagem de erro', async () => {
    renderWithRouterAndRedux(<App />);

    expect(APIModule.fetchNews).toHaveBeenCalledTimes(1);
  });
});
