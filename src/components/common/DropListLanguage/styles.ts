import styled from "styled-components";

export const DropListContainer = styled.div<{$cart:boolean}>`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  position: absolute;
  top: 42px;
  top:${({$cart}) => $cart && `50px`};
  background-color: white;
  border: 1px solid #00000014;
  z-index: 1;
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
  &:hover{
    background-color: gray;
  }
`;
