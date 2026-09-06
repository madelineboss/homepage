import React from 'react';
import './home.css';
import { Routes, Route, Link} from 'react-router-dom'


function Home() {
  return (
    <div className="homepage">
        <nav>
            <Link to= "/">Home</Link> | <Link to="/about">About Me</Link>
        </nav>
      <h1>Hi! I'm Madeline Boss</h1>
    </div>
  );
}

export default Home;