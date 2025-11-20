import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Contact } from './pages/Contact.tsx';
import { Start } from './pages/Start.tsx';
import { Solutions } from './pages/Solutions.tsx';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/start" element={<Start />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
