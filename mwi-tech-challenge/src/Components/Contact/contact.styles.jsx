import styled from 'styled-components'
import { size,device } from '../Styles/queries'
import { colors } from '../Styles/colors'
const { desktopW,mobileW } = size
const { darkGray } = colors

export const ContactPage = styled.main`
    position:relative;
    background-color:${darkGray};
    width:${desktopW};
    height:100%;
    display:flex;
    align-items:flex-start;
    justify-content:center;

    @media ${device.query} {
        width:${mobileW};
        flex-direction:column;
    }
`