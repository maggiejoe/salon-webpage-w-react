import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

import BookPage from './pages/BookPage/index';
import LocationsPage from './pages/LocationsPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/booking-page' element={<BookPage />}></Route>
        <Route exact path='/locations-page' element={<LocationsPage />}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
