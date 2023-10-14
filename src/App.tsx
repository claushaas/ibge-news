import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewsGrid from './components/NewsGrid';
import FavoriteNewsGrid from './components/FavoriteNewsGrid';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> }>
        <Route index element={ <NewsGrid /> } />
        <Route path="release" element={ <NewsGrid /> } />
        <Route path="noticias" element={ <NewsGrid /> } />
        <Route path="favoritas" element={ <FavoriteNewsGrid /> } />
      </Route>
    </Routes>
  );
}

export default App;
