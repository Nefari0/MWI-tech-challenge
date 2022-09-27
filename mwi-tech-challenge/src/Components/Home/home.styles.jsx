import styled from "styled-components";
import { size,device } from "../Styles/queries";

export const HomePage = styled.div`
    width:${size.desktop};
    margin:auto;
    height: 1000px;
    background-color: #222222;

    @media ${device.query} {
        width: 400px;
        min-height: 1500px;
    }
`
export const HomeContent = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;

@media ${device.query} {
    flex-direction: column;
}
`