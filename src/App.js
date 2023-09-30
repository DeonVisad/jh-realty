import React, {useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
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
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);
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
        <Route path='/meetAgent' element={<MeetAgent />} />
      </Routes>
      
    </div>
  );
}

export default App;
