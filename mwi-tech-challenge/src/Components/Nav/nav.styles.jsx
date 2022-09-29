import styled from "styled-components";
import { colors } from "../Styles/colors";
import { device,size } from "../Styles/queries";
const { desktop } = device
const { gold } = colors
const { mobileW,desktopW } = size

export const Nav = styled.nav`
    width:${desktopW};
    margin:auto;
    height:100px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    z-index:1000;
    position:absolute;
    top:0;
    
    a {
        color:${gold};
        font-weight:bold;
        width:150px;
        font-size:20px;
    }

    
    @media ${desktop} {
        width:${mobileW};
        img {width:300px;}
    }
`