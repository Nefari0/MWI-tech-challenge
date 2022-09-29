import styled from "styled-components";
import { device, size } from "./Components/Styles/queries";
import { colors } from './Components/Styles/colors'
const { darkGray,black } = colors
const { mobileW,desktopW } = size
const { desktop } = device

export const AppContainer = styled.main`
    text-align: center;
    background-color:${black};
    min-height:100vh;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    overflow:hidden;
    @media ${desktop} {
        min-width:${mobileW};
        margin:auto;
    }

    section {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        position:relative;
        width:${desktopW};
        min-height:100vh;
        background-color:${darkGray};
        margin:auto;
        display: flex;
        flex-direction: column;
        overflow:auto;
        z-index:10000;
        
        @media ${desktop} {
            width:${mobileW};
            min-height:150vh;
        }
    }

    a {cursor: pointer;}
`