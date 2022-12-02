import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Detail from './components/pages/Detail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/details' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
