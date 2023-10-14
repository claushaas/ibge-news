import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewsGrid from './components/NewsGrid';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> }>
        <Route index element={ <NewsGrid /> } />
        <Route path="release" element={ <NewsGrid /> } />
        <Route path="noticias" element={ <NewsGrid /> } />
        <Route path="favoritas" element={ <NewsGrid /> } />
      </Route>
    </Routes>
  );
}

export default App;
