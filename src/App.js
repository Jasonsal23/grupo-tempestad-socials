import React from 'react';
import './App.css';
import  Socials from './components/socials';
import Foto from './components/images/grupo-foto.png';
import Footer from './components/footer';
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <div>
    <div className="Background" />
    <div className="App">
      <div className="Photo">
        <img className="Foto" src={Foto} alt="Grupo Tempestad" />
      </div>
      <div className="Text">
        <h1>GRUPO TEMPESTAD</h1>
        <p>Las Vegas, NV</p>
      </div>
      <div className="Social">
      <Socials />
      </div>
      <Footer />
    </div>
    <Analytics />
    </div>
  );
}

export default App;
