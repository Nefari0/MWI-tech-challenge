import styled from "styled-components";
import { device, size } from "./Components/Styles/queries";
import { colors } from './Components/Styles/colors'
const { darkGray,black } = colors
const { mobileW,desktopW } = size

export const AppContainer = styled.main`
    text-align: center;
    background-color:${black};
    // min-height:1000px;
    max-height:100vh;
    height:auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    overflow:hidden;

    section {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        // positon:absolute;
        position:relative;
        width:${desktopW};
        min-height:100vh;
        background-color:${darkGray};
        margin:auto;
        display: flex;
        flex-direction: column;
        overflow:auto;
        z-index:10000;
        
        @media ${device.query} {width:${mobileW};}
    }

    a {cursor: pointer;}
`