import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GamesLore from './pages/GamesLore';
import GamePage from './pages/GamePage';
import About from './pages/About';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="games" element={<GamesLore />} />
        <Route path="games/:id" element={<GamePage />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}