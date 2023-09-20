import {Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/'/>
      </Routes>
    </div>
  );
}

export default App;
