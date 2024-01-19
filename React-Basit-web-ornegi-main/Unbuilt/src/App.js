import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Footer from './components/footer';
import Menu from './components/Helper/Menu';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import "./App.css";

const App = () => {

  return (
    <div className='container-fluid g-0'>
      <div className="row">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );

}

export default App;
