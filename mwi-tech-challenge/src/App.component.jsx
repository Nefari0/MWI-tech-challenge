import { useState } from 'react';
import isLoadingReducer from './dux/isLoadingReducer';
import { connect } from 'react-redux'
import Home from './Components/Home/home.component';
import Contact from './Components/Contact/contact.component';
import NavBar from './Components/Nav/nav.component';
import { AppContainer } from './App.styles';
import Spinner from './Components/Spinner/spinner.component';

function App(props) {

  const [isContact,setIsContact] = useState(false)
  const { isLoading } = props.isLoading

  return (

    <AppContainer>
      <section>

        {isLoading && <Spinner/>}
        
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

function mapStateToProps(reduxState){
  return reduxState
}

export default connect(mapStateToProps, { isLoadingReducer })(App)
