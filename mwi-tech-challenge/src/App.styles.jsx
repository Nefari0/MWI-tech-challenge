import styled from "styled-components";
import { device, size } from "./Components/Styles/queries";
import { colors } from './Components/Styles/colors'
const { darkGray } = colors
const { mobileW,desktopW } = size

export const AppContainer = styled.main`
    text-align: center;
    width:${desktopW};
    height:100vh;
    background-color:${darkGray};
    margin:auto;
    overflow:scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    display: flex;
    flex-direction: column;

    @media ${device.query} {
        width:${mobileW}
    }
`