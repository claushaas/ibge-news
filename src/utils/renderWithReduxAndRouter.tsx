import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ReduxState } from '../types';
import newsReducer from '../redux/reducers/newsReducer.ts';
import favoritesReducer from '../redux/reducers/favoritesReducer.ts';

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
      <BrowserRouter>
        <Provider store={ store }>{component}</Provider>
      </BrowserRouter>,
    ),
    user: userEvent.setup(),
    store,
  };
}

export default renderWithRouterAndRedux;
