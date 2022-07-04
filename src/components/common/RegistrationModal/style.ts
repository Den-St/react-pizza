import styled from "styled-components";

export const RegistrationWrapper =styled.div`
  width: 250px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const RegistrationHeader = styled.h1`
  width: 100%;
  text-align: center;
  font-family: Calibri;

`;

export const RegistrationForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > input {
    font-family: Calibri;
    padding-left: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    margin-bottom: 10px;
    border: 1px solid #b2b2b2;
    background-color: transparent;
    outline: none;
  }
`;

export const InputEmail = styled.input``;

export const InputParol = styled.input``;

export const RepeatInputParol = styled.input``;

export const RegistrationButton = styled.button`
  width: 100%;
  height: 45px;
  margin-bottom: 23px;
  background-color: red;
  color: white;
  font-size: 1em;
  font-weight: 700;
  font-family: Calibri;
  box-shadow: 1px 1px black;
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    background-color: #ad1e22;
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 0 0 0 white;
  }
  border:none;
  border-radius: 5px;
`;

export const BackButton = styled.button`
  width: 100%;
  color: red;
  border:none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: Calibri;
`;

export const ErrorList = styled.span`
  width: 100%;
`;