import { useState } from 'react';
import {setSpinner} from './dux/isLoadingReducer';
import { clearMessage } from './dux/noticeReducer';
import { connect } from 'react-redux'
import Home from './Components/Home/home.component';
import Contact from './Components/Contact/contact.component';
import NavBar from './Components/Nav/nav.component';
import { AppContainer } from './App.styles';
import Spinner from './Components/Spinner/spinner.component';
import { Notice } from './Components/Notice/notice.component';

function App(props) {

  const [isContact,setIsContact] = useState(false)
  const { isLoading } = props.isLoading
  const { notice } = props.notice

  return (

    <AppContainer>
      <section>
        {notice && <Notice text={notice} clearNotice={props.clearMessage} />}

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

export default connect(mapStateToProps, { setSpinner,clearMessage })(App)
