import styled from 'styled-components'
import { size,device } from '../Styles/queries'
import { colors } from '../Styles/colors'
const { desktop } = device
const { desktopW,mobileW } = size
const { white } = colors

export const ContactPage = styled.main`
    position:relative;
    background-color:${white};
    width:${desktopW};
    height:100vh;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    
    @media ${desktop} {
        position:absolute;
        width:${mobileW};
        flex-direction:column;
        justify-content:flex-start;
        align-items: center;
    }
`