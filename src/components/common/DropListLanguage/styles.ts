import styled from "styled-components";

export const DropListLanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  border-radius: 15px;
  position: absolute;
  top: 42px;
  background-color: white;
  border: 1px solid #00000014;
`;

export const ItemLanguage = styled.div`
  width: 100%;
  height: 50px;
  border-bottom-right-radius:15px ;
  border-bottom-left-radius:15px ;
  border: 1px solid #00000014;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;