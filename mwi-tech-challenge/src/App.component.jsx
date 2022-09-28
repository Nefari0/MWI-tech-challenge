import { useState } from 'react';
import Home from './Components/Home/home.component';
import Contact from './Components/Contact/contact.component';
import NavBar from './Components/Nav/nav.component';
import { HeadingOne } from './Components/HeadingOne/heading-one.component';
import { AppContainer } from './App.styles';

function App() {

  const [isContact,setIsContact] = useState(false)

  return (

    <AppContainer>
      <NavBar
        isContact={isContact}
        setIsContact={setIsContact}
      />
      {/* {!isContact && <Home/>} */}
      {/* {isContact && <Contact />} */}
            {/* <HeadingOne title={'Heading One'}>
                Remove the duplicates in 2 Javascript arrays,
                add the results to an array and output the list of distinct
                names in an unordered list below this paragraph when{' '}
                <a >this link</a> is clicked. If the
                operation has been completed already, notify the user that this
                has already been done.
            </HeadingOne> */}

            
     
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
    </AppContainer>
  );
};

export default App;
