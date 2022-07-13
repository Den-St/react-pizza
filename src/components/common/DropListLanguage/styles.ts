import styled from "styled-components";

export const DropListContainer = styled.div<{$cart:boolean}>`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  position: absolute;
  top: 42px;
  top:${({$cart}) => $cart && `62px`};
  box-shadow: ${({$cart}) => $cart && `-1px 5px 17px 4px black`};
  background-color: white;
  border: 1px solid #00000014;
  z-index: 1;
  overflow: hidden;
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
