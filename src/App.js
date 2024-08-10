import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route index path="/" element={<Home />} />
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
