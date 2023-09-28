import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import BuyingProcess from './Pages/BuyingProcess/BuyingProcess';
import FirstTimeBuyer from './Pages/FirstTimeBuyer/FirstTimeBuyer';
import FreeCma from './Pages/FreeCma/FreeCma';
import ListingProcess from './Pages/ListingProcess/ListingProcess';
import Contact from './Pages/Contact/Contact';
import MeetAgent from './Components/MeetAgent/MeetAgent';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/buyingprocess' element={<BuyingProcess />}/>
        <Route path='/firstTimeHomeBuyer' element={<FirstTimeBuyer />}/>
        <Route path='/freeCma' element={<FreeCma />}/>
        <Route path='/listingProcess' element={<ListingProcess />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='#meetAgent' element={<MeetAgent />} />
      </Routes>
      
    </div>
  );
}

export default App;
