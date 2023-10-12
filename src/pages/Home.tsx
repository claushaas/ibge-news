import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { useEffect } from 'react';
import Header from '../components/Header';
import { fetchNewsFromAPI } from '../redux/actions/newsAction';
import MainNews from '../components/MainNews';
import { ReduxState } from '../types';

function Home() {
  const dispatch = useDispatch();
  const allNews = useSelector((state: ReduxState) => state.news);
  console.log(allNews);

  useEffect(() => {
    dispatch(fetchNewsFromAPI() as unknown as AnyAction);
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainNews news={ allNews[0] } />
    </>
  );
}

export default Home;
