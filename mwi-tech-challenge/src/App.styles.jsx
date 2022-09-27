import styled from "styled-components";
import { device, size } from "./Components/Styles/queries";

export const AppContainer = styled.main`
    text-align: center;
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