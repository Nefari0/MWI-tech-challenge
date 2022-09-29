import styled from "styled-components";
import { colors } from "../Styles/colors";
import { size,device } from "../Styles/queries";

const { desktop } = device
const {mobileW,desktopW} = size
const { darkGray,white,gold } = colors
const smallPixelSlice = parseInt(mobileW.split(/([0-9]+)/)[1]) - 100 // For padding
const largePixelSlice = parseInt(desktopW.split(/([0-9]+)/)[1]) -100

export const HeadOne = styled.header`
    width:${({theWidth}) => largePixelSlice-theWidth()}px;
    position:relative;
    padding-left:50px;
    padding-right:50px;
    text-align:left;
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content:center;
    height:100%;
    background-color:${darkGray};
    color:${white};
    z-index:0;

    @media ${desktop} {
        width:${smallPixelSlice}px;
        padding-top:100px;
    }

    h1 {
        height: 70px;
        font-size:36px;
        position: relative;

        span {
            border-bottom: 2px solid ${gold};
            position:absolute;
            left:0;
            bottom:0;
            width:100px;
        }
    }

    p {
        font-size: 20px;
    }

    a {
        color:${gold};
    }
`;