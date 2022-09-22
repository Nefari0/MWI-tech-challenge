import styled from "styled-components";
import { colors } from "../Styles/colors";
import { device,size } from "../Styles/queries";
const { gold } = colors

export const Nav = styled.nav`
    width:100vw;
    max-width:${size.desktop};
    margin:auto;
    height:100px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    
    a {
        color:${gold};
        font-weight:bold;
        width:150px;
        font-size:20px;
    }

    
    @media ${device.query} {
        width:${size.mobile};
        img {width:300px;}
    }
`