import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import Header from '../components/Header';
import { fetchNewsFromAPI } from '../redux/actions/newsAction';

function Home() {
  const dispatch = useDispatch();

  dispatch(fetchNewsFromAPI() as unknown as AnyAction);
  return (
    <>
      <Header />
      <div>Home</div>
    </>
  );
}

export default Home;
