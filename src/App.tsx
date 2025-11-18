import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { SobreNos } from './pages/SobreNos.tsx';
import { Contato } from './pages/Contato.tsx';
import { Start } from './pages/Start.tsx';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<SobreNos />} />
        <Route path="/start" element={<Start />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
