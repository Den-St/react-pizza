import styled from "styled-components";

export const DropListContainer = styled.div<{$cart:boolean}>`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  position: absolute;
  top: 42px;
  top:${({$cart}) => $cart && `62px`};
  box-shadow: ${({$cart}) => $cart && `0px 0px 20px 0px black`};
  max-height:${({$cart}) => $cart && `600px`};
  overflow: ${({$cart}) => $cart ? `scroll` : `hidden`};
  background-color: white;
  border: 1px solid #00000014;
  overflow-x: hidden;
  z-index: 1;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    border-radius: 15px;
    background: #555;
  }
`;

export const ItemLanguage = styled.div`
  width: 150px;
  height: 50px;
  font-family: Calibri;
  //border-bottom-right-radius:15px ;
  //border-bottom-left-radius:15px ;
  border: 1px solid #00000014;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: rgba(211, 211, 211, 0.7);
  }
`;
