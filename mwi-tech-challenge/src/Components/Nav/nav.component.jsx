import { Nav } from "./nav.styles";
import MWIlogo from '../../assets/MWI-logo.png'
import { useState } from "react";

const NavBar = () => {

    const [contact,setContact] = useState(false)

    return(
        <Nav>
            <img src={MWIlogo} />
            <a onClick={() => setContact(!contact)}>
                {contact ? 'contact':'home'}
            </a>
        </Nav>
    )
}

export default NavBar