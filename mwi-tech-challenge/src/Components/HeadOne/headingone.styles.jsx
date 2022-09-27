import styled from "styled-components";
import { colors } from "../Styles/colors";
import { size,device } from "../Styles/queries";

const {mobile,desktop} = size
const { darkGray,white } = colors
const smallPixelSlice = parseInt(size.mobile.split(/([0-9]+)/)[1]) - 100
const largePixelSlice = parseInt(size.desktop.split(/([0-9]+)/)[1]) -100

export const HeadOne = styled.header`
    width: ${largePixelSlice}px;
    padding-left:50px;
    padding-right:50px;
    margin:auto;
    text-align:left;
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    color:${white};

    @media ${device.query} {
        width:${smallPixelSlice}px;
    }

    h1 {
        height: 50px;
        position: relative;

        span {
            border-bottom: 2px solid #DEBF79;
            position:absolute;
            left:0;
            bottom:0;
            width:100px;
        }
    }

    p {
        font-size: 20px;
    }
`;