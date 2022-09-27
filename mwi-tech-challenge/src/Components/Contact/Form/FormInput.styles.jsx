import styled, { css } from 'styled-components'
import { colors } from '../../Styles/colors';
import { device } from '../../Styles/queries';
const { query } = device
const { lightGray,darkGray } = colors

const shrinkLabelStyles = css`
    top: -10px;
    font-size: 12px;
`;

export const FormInputLabel = styled.label`
    color: ${darkGray};
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
    width:90%;
    height:100px;
`;

export const Group = styled.div`
    width:50%;
    height:0px;
    margin:auto;
    margin-top:-10px;
    position: relative;
`;

export const Form = styled.form`
    position: absolute;
    margin:auto;
    height: 500px;
    padding-top:200px;
    padding-bottom:200px;
    width: 600px;
    background-color: #fff;
    right: 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media ${query} {
        position: relative;
        background-color: #fff;
        width: 400px;
        height: 650px;
        margin-left: 19px;
        margin:auto;
        padding-top: 30px;
    }
    
`;