import styled, { css } from 'styled-components'
import { colors } from '../../Styles/colors';
import { device } from '../../Styles/queries';
const { desktop } = device
const { lightGray,darkGray,midGray,white } = colors

const shrinkLabelStyles = css`
    top: -10px;
    font-size: 12px;
`;

export const FormInputLabel = styled.label`
    color: ${midGray};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top:20px;
    transition: 300ms ease all;

    ${({ shrink }) => shrink && shrinkLabelStyles};

`;

export const Input = styled.input`
    background: none;
    background-color: ${lightGray};
    color: ${darkGray};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 90%;
    height:30px;
    border: none;
    border-radius: 0;
    margin: 10px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ ${FormInputLabel} {
      ${shrinkLabelStyles};
    }
`;

export const Message = styled(Input)`
    width:95%;
    height:50px;
    @media ${desktop} {width:90%;}
`;

export const Group = styled.div`
    width:50%;
    height:0px;
    margin:auto;
    margin-top:-10px;
    position: relative;

    @media ${desktop} {width:100%;}
`;

export const LargeGroup = styled(Group)`
    width:100%;
`

export const Form = styled.form`
    margin:auto;
    min-height: 600px;
    width: 570px;
    padding:30px;
    background-color: ${white};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    z-index:0;

    button {
        margin:auto;
    }

    @media ${desktop} {
        position: relative;
        background-color: ${white};
        width: 350px;
        margin:auto;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    
`;