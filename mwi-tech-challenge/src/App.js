import MWIlogo from './assets/MWI-logo.png'
import './App.css';
import { useState } from 'react';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/Nav/nav.component'
import { AppContainer } from './App.styles';

function App() {

  const [isContact,setIsContact] = useState(true)

  return (

    <AppContainer>
      <NavBar
        isContact={isContact}
        setIsContact={setIsContact}
      />
      {isContact ?
        <Home/>
        :
        <Contact/>
      }
    </AppContainer>
  );
}

export default App;
