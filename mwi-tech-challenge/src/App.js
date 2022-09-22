import MWIlogo from './assets/MWI-logo.png'
import './App.css';
import { useState,useEffect } from 'react';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/Nav/nav.component'
// import Contact from '../../'

function App() {

  const [isContact,setIsContact] = useState(true)

  return (
    <div className="App">
      <NavBar/>
      <Home />

    </div>
  );
}

export default App;
