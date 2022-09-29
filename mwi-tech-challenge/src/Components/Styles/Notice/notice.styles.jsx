import styled from "styled-components";
import { device,size } from "../queries";
const { mobileW,desktopW } = size
const { desktop } = device


export const NoticeLayout = styled.div`
    position:relative;
    left:${mobileW};
    top:35%;
    width:400px;
    height:200px;
    z-index:10;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:white;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);

    @media ${desktop} {left:0;}

    button {width:100px;}

    p {
        height:100px;
        font-size:20px;
        font-weight:bold;
    }
`

export const OverLay = styled.div`
    width:${desktopW};
    height:100vh;
    position:fixed;
    z-index:10000;

    @media ${desktop} {width:${mobileW};}
`