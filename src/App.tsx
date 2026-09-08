import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/aboutMe';
import { Routes, Route, Link} from 'react-router-dom';
import Madeline from './images/Madeline.jpg';

function App() {
  return (
    <div className="App">
      <div className="Background">
        <nav>
            <Link to= "/homepage">Home</Link> | <Link to="/about">About Me</Link>
        </nav>
        <Routes>
          <Route path="/homepage" element={
            <>
              <h1 className="Font">Hi, I'm Madeline Boss.</h1>
              <img src={Madeline} className="Madeline" alt="Picture of me!" />
            </>
          }
        />
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </div>

  );
}

export default App;
