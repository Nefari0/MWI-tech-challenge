import styled, { css } from "styled-components";
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
    position:absolute;
    left:33%;
    display:flex;
    flex-direction:column;
    margin:auto;
    padding-bottom:20px;
    min-height:250px;
    width:${mobileW};
    tansition: all 1000ms;

    @media ${desktop} {left:50px;}

    p {margin:2px;}
`