import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App(){
  return (
      <div className="App">
          <Header />
          <Home />
          <About />
          <Skills />
          <Contact />
          <Footer />
      </div>
  );
}

export default App;

