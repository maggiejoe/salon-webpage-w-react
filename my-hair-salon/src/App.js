import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import BookPage from './pages/BookPage';
import LocationsPage from './pages/LocationsPage';
import LandingPage from './pages/LandingPage';
import StylistsPage from './pages/StylistsPage';
import ServicesPage from './pages/ServicesPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header />
      <Routes className=''>
        <Route exact path='/booking-page' element={<BookPage />}></Route>
        <Route exact path='/locations-page' element={<LocationsPage />}></Route>
        <Route exact path='/' element={<LandingPage />}></Route>
        <Route exact path='/stylists' element={<StylistsPage />}></Route>
        <Route exact path='/services' element={<ServicesPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
