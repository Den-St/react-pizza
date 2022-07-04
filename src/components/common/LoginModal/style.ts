import styled from "styled-components";

export const LogInHeader = styled.h3`
  font-size: 1.625em;
  font-family: Roboto,sans-serif;
  font-weight: 700;
  width: 100%;
  text-align: center;
`;

export const LogInForm = styled.form`
  width: 250px;
  min-height: 261px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &>span{
    font-size: .875em;
    cursor: pointer;
    color: #a6a6a6;
    margin: 5px 0;
  }
`;

export const Input = styled.input`
  width: 250px;
  height: 38px;
  margin-bottom: 10px;
  padding: 0 12.5px;
  box-sizing: border-box;
  border:1px solid #e8e8e8;
  font-family: Calibri;
  font-weight: 300;
  font-size: .875em;
  &:active{
    border: 1px solid #e8e8e8;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 43px;
  margin-top: 3px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: none;
  outline: none;
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
`;

export const RegistrationButton = styled.button`
  width: 100%;
  height: 43px;
  margin-top: 3px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: none;
  outline: none;
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
`;

export const ReferencesContainer = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  flex-direction: column;
  &>span{
    text-align: center;
    font-family: Roboto;
    color: rgba(25,25,25,.671);
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  width: 134px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  &>button{
    width: 60px;
    height: 60px;
    font-size: 60px;
    font-weight: bold;
    font-family: Calibri;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid #e8e8e8;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const FacebookButton = styled.button`
  color: #1c3e85;
`;

export const GoogleButton = styled.button`
  color: #ff8000;
`;

export const ErrorList = styled.span`
 width: 250px;
`;