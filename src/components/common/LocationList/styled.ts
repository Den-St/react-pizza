import styled from "styled-components";

export const LocationListContainer = styled.div`
  width: 120px;
  height: 195px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const ChooseLocationButton = styled.button`
  box-sizing: border-box;
  width: 69px;
  border: none;
  background-color: transparent;
  outline: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 10px;
  cursor: pointer;
  color: #4f4f4f;
  &:hover{
    color: black;
  }
`;