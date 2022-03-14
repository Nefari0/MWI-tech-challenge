import logo from './logo.svg';
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
        <h2 className={`header-left ${isContact ? true : 'header-left heading'}`} >Midwestern</h2>
        <div className={`header-right ${isContact ? true : 'header-right contact'}`}  >{isContact === true ?<a onClick={() => setIsContact(!isContact)} >contact</a>:<div><a onClick={() => setIsContact(!isContact)} >home</a><Contact /></div>}</div>
      </header>
        {isContact === true ? <Home /> : null}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
