import styled from "styled-components";
import { colors } from "./Components/Styles/colors";
import { device, size } from "./Components/Styles/queries";
const { darkGray } = colors

export const AppContainer = styled.main`
    text-align: center;
    background-color: ${darkGray};
    width:${size.desktop};
    margin:auto;
    overflow:scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    display: flex;
    flex-direction: column;

    @media ${device.query} {
        width:${size.mobile}
    }
`