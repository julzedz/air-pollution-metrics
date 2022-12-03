import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Detail from './components/pages/Detail';
import Home from './components/pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
