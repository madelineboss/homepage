import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/aboutMe';
import Home from './pages/home';
import { Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div className="Background">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </div>

  );
}

export default App;
