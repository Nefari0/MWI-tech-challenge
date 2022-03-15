import MWIlogo from './assets/MWI-logo.png'
import './App.css';
import { useState,useEffect } from 'react';
import Home from './Components/Home/Home/Home';
import Contact from './Components/Home/Contact/Contact';

function App() {

  const [isContact,setIsContact] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
      <header className="home-header" >

        <div className={`header-left ${isContact ? true : 'header-left heading'}`}>
          <h2><img src={MWIlogo} /></h2>
          {isContact === false ? <div className='heading-2-text'><h1 className="heading-1" >Heading One</h1>
          <p className="home-text" style={{textAlign:'left',marginLeft:'40px'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic , remaining essentially unchanged
          </p>
          </div> : null}
        </div>

        <div className={`header-right ${isContact ? true : 'header-right contact'}`}  >
          {isContact === true ?
          <a onClick={() => setIsContact(!isContact)} >contact</a>
          :
          <div><a onClick={() => setIsContact(!isContact)} >home</a><Contact /></div>}
        </div>
      </header>
        {isContact === true ? <Home /> : null}
      </header>
    </div>
  );
}

export default App;
