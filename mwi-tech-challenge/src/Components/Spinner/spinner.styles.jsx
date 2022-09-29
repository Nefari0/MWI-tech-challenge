import styled from 'styled-components';
import { size,device } from '../Styles/queries';
const { desktopW,mobileW } = size
const { desktop } = device

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: ${desktopW};
  display: flex;
  justify-content: center;
  align-items: center;
  position:fixed;
  top:20%;
  z-index:100000000;

  @media ${desktop} {width:${mobileW};}
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
