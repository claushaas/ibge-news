import { AnyAction } from 'redux';
import { News } from '../../types';

const initialState: News[] = [];

const newsReducer = (state: News[] = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default newsReducer;
