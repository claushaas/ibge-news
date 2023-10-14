import { fetchNews } from '../../services/newsAPI';
import { Dispatch, NewsArray } from '../../types';

export const GET_NEWS = 'GET_NEWS';

export const getNews = (data: NewsArray) => ({
  type: GET_NEWS,
  payload: data,
});

export const fetchNewsFromAPI = () => async (
  dispatch: Dispatch,
) => {
  try {
    const data = await fetchNews();
    dispatch(getNews(data));
  } catch (error) {
    console.log(error);
  }
};
