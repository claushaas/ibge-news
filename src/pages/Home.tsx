import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { fetchNewsFromAPI } from '../redux/actions/newsAction';
import MainNews from '../components/MainNews';
import NewsNavigation from '../components/NewsNavigation';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsFromAPI() as unknown as AnyAction);
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainNews />
      <NewsNavigation />
      <Outlet />
    </>
  );
}

export default Home;
