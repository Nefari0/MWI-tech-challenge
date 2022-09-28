import styled, { css } from 'styled-components'
import { colors } from '../../Styles/colors';
import { device } from '../../Styles/queries';
const { query } = device
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
    @media ${query} {width:90%;}
`;

export const Group = styled.div`
    width:50%;
    height:0px;
    margin:auto;
    margin-top:-10px;
    position: relative;

    @media ${query} {width:100%;}
`;

export const LargeGroup = styled(Group)`
    width:100%;
`

export const Form = styled.form`
    // position: absolute;
    margin:auto;
    height: 100%;
    width: 600px;
    background-color: ${white};
    right: 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    button {
        margin:auto;
    }

    @media ${query} {
        position: relative;
        background-color: #fff;
        width: 400px;
        height: 650px;
        margin-left: 19px;
        margin:auto;
        padding-top: 30px;
        flex-direction:column;
    }
    
`;