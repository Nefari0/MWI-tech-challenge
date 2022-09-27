import styled from "styled-components";
import { colors } from "../colors";
const { white,gold } = colors

export const BaseButton = styled.button`
    background-color: ${gold};
    color:${white};
    min-width: 165px;
    margin: 0px 0px 16px 5px;
    min-height: 50px;
    letter-spacing: 0.5px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms ease all;

    &:hover {
        background: ${white};
        color: ${gold};
    }
`