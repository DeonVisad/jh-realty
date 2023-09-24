import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import BuyingProcess from './Pages/BuyingProcess/BuyingProcess';
import FirstTimeBuyer from './Pages/FirstTimeBuyer/FirstTimeBuyer';
import FreeCma from './Pages/FreeCma/FreeCma';
import ListingProcess from './Pages/ListingProcess/ListingProcess';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/buyingprocess' element={<BuyingProcess />}/>
        <Route path='FirstTimeHomeBuyer' element={<FirstTimeBuyer />}/>
        <Route path='FreeCma' element={<FreeCma />}/>
        <Route path='ListingProcess' element={<ListingProcess />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      
    </div>
  );
}

export default App;
