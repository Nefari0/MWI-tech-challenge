import styled from "styled-components";
import { colors } from "../Styles/colors";
const { darkGray } = colors

export const HeadOne = styled.header`
    position: relative;
    width: 50%;
    height: 100%;
    background-color: ${darkGray};
    display: flex;
    // flex-direction: row;
    // flex-wrap: nowrap;
    align-items: center;
    padding-left: 40px;
`;