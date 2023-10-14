import { AnyAction } from 'redux';

const initialState: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
// const initialState: number[] = [];

const favoritesReducer = (state: number[] = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REMOVE_FAVORITE':
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
};

export default favoritesReducer;
