import React from 'react'
import Nav from './components/Nav';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Portfolio/>
      <Education/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;

     
      