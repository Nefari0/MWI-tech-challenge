import styled from "styled-components";
import { colors } from "../../Styles/colors";
const { white } = colors

export const ContentContainer = styled.div`
    height: 300px;
    width:300px;
    padding:20px;
    background-color: ${white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 2px;
    margin: 10px;
    text-align:left;

    p {
        font-size: 14px;
    }

    img {
        height: 100px;
    }
`