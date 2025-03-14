import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App(){
  return (
      <div className="App">
          <Header />
          <Home />
      </div>
  );
}

export default App;

