import styled from "styled-components";
import { device } from "../queries";

export const NoticeLayout = styled.div`
    position:absolute;
    left:400px;
    top:200px;
    width:400px;
    height:200px;
    z-index:10;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:white;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);

    @media ${device.query} {
        left:0;
    }

    button {width:100px;}

    p {
        height:100px;
        font-size:20px;
        font-weight:bold;
    }
`