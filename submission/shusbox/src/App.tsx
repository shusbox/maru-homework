// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Create from './pages/Create';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;