import styled from "styled-components";
import { size,device } from "../Styles/queries";
import { colors } from "../Styles/colors";
const { darkGray } = colors
const { desktopW,mobileW } = size
const { desktop } = device

export const HomePage = styled.div`
    width:${desktopW};
    margin:auto;
    background-color: ${darkGray};
    position:absolute;

    @media ${desktop} {
        width: ${mobileW};
    }
`
export const HomeContent = styled.div`
    width: 100%;
    margin-top:100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;

    @media ${desktop} {
        flex-direction: column;
    }
`

export const NameRow = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    margin:auto;
    height:150px;

    p {margin:2px;}
`