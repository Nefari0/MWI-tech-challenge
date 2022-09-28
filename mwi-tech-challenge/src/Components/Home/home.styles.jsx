import styled from "styled-components";
import { size,device } from "../Styles/queries";
import { colors } from "../Styles/colors";
const { darkGray } = colors
const { desktopW } = size

export const HomePage = styled.div`
    width:${desktopW};
    margin:auto;
    background-color: ${darkGray};
    position:absolute;

    @media ${device.query} {
        width: 400px;
        // min-height: 1500px;
    }
`
export const HomeContent = styled.section`
    width: 100%;
    margin-top:100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;

    @media ${device.query} {
        flex-direction: column;
    }
`