import styled from 'styled-components'
import { size,device } from '../Styles/queries'
const { desktop } = size

export const ContactPage = styled.main`
    position:relative;
    margin:auto;
    width:${desktop};
    height:600px;

    @media ${device.query} {
        width:${size.mobile};
    }
`