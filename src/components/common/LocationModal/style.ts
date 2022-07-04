import styled from "styled-components";
import {SvgIcon} from "../Icon/SvgIcon";

export const CurrentLocation = styled.div`
  width: 100%;
  height: 19px;
  color: red;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 15px;
  font-family: Open Sans,sans-serif;
`;

export const OtherLocations = styled.div`
  width: 678px;
  height: 195px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  font-family: Open Sans,sans-serif;
`;

export const ChooseLocationButton = styled.button`
  box-sizing: border-box;
  width: 50%;
  height: 20%;
  border: none;
  background-color: transparent;
  outline: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  color: #4f4f4f;
  &:hover{
    color: black;
  }
`;

export const LocIcon = styled(SvgIcon)`
    position: absolute;
    width: 24px;
    height: 24px;
    top:35px;
    left: 75px;
    fill: black;
    stroke: black;
`;