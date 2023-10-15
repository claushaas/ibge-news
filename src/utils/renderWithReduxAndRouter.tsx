import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import { ReduxState } from '../types';
import newsReducer from '../redux/reducers/newsReducer.ts';
import favoritesReducer from '../redux/reducers/favoritesReducer.ts';
import theme from '../assets/styledTheme.ts';

function renderWithRouterAndRedux(
  component: JSX.Element,
  route: string = '/',
  state: ReduxState | undefined = undefined,
  store = legacy_createStore(
    combineReducers({
      news: newsReducer,
      favorites: favoritesReducer,
    }),
    state,
    applyMiddleware(thunk),
  ),
) {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(
      <ThemeProvider theme={ theme }>
        <BrowserRouter>
          <Provider store={ store }>{component}</Provider>
        </BrowserRouter>
      </ThemeProvider>,
    ),
    user: userEvent.setup(),
    store,
  };
}

export default renderWithRouterAndRedux;
