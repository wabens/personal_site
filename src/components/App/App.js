import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Header/>
      <About />
      <Portfolio/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
