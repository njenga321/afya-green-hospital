import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <Routes>
          <Route index path="/" element={<Home />} />
          
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
