import { useState } from 'react';
import Home from './Components/Home/home.component';
import Contact from './Components/Contact/contact.component';
import NavBar from './Components/Nav/nav.component';
import { AppContainer } from './App.styles';

function App() {

  const [isContact,setIsContact] = useState(false)

  return (

    <AppContainer>
      <section>
        <NavBar
          isContact={isContact}
          setIsContact={setIsContact}
        />            
      
        {!isContact ?
          <Home
            isContact={isContact}
            setIsContact={setIsContact}
          />
          :
          <Contact
            isContact={isContact}
            setIsContact={setIsContact}
          />
        }
      </section>
    </AppContainer>
  );
};

export default App;
