import './App.css';
import ListadoPeliculas from './ListadoPeliculas';
import Blog from './Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />} />

        <Route path="/" element={<ListadoPeliculas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
