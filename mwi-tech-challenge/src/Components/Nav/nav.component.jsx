import { Nav } from "./nav.styles";
import MWIlogo from '../../assets/MWI-logo.png'
import { Link } from 'react-router-dom'

const NavBar = ({isContact,setIsContact}) => {

    return(
        <Nav>
            <img src={MWIlogo} />
            <a onClick={() => setIsContact(!isContact)}>
                {isContact ? 'contact':'home'}
            </a>
        </Nav>
    )
}

export default NavBar