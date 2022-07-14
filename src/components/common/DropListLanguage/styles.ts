import styled from "styled-components";

export const DropListContainer = styled.div<{$cart:boolean}>`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  position: absolute;
  top: 42px;
  top:${({$cart}) => $cart && `62px`};
  box-shadow: ${({$cart}) => $cart && `-1px 5px 17px 4px black`};
  max-height:${({$cart}) => $cart && `600px`};
  overflow: ${({$cart}) => $cart ? `scroll` : `hidden`};
  background-color: white;
  border: 1px solid #00000014;
  overflow-x: hidden;
  z-index: 1;
  ::-webkit-scrollbar {
    width: 6px;
    max-height: 590px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
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
