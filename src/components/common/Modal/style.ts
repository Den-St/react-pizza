import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
`;

export const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
`;

export const ModalWrapper = styled.div<{padding?:string}>`
  padding: ${({padding}) => padding ? padding : `40px 100px`};
  border-radius: 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  box-shadow: 2px 4px 10px rgba(0,0,0,0.8);
`;

export const CloseButton = styled.button`
  font-size: 25px;
  background-color: transparent;
  border: 1px solid #e9e9e9;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top:20px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;