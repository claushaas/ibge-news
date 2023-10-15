import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import { ReduxState } from '../types';
import newsReducer from '../redux/reducers/newsReducer';
import favoritesReducer from '../redux/reducers/favoritesReducer';

function renderWithRedux(
  component: JSX.Element,
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
  const user = userEvent.setup();
  return {
    ...render(<Provider store={ store }>{component}</Provider>),
    store,
    user,
  };
}

export default renderWithRedux;
