import styled from "styled-components";
import Select from "react-select";

export const OrderPageContainer = styled.div`
  box-sizing: border-box;
  max-width: 1320px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 30px;
  font-family: Calibri;
`;

export const LeftContainer = styled.div`
  max-width: 752px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid black;
`;

export const OrderingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &>button{
    width: 368px;
    height: 50px;
    background-color: transparent;
    border: 1px solid #f1f1f1;
    border-radius: 25px;
  }
`;

export const OrderingHeader = styled.span`
  width: 100%;
  margin: 20px;
  height: 18px;
  font-size: 18px;
  font-weight: 600;
`;

export const DeliveryButton = styled.button<{$isActive:boolean}>`
    cursor: pointer;
  color: ${({$isActive}) => $isActive ? `red` : `black`};
`;
export const WithMeButton = styled.button<{$isActive:boolean}>`
  cursor: pointer;
  color: ${({$isActive}) => $isActive ? `red` : `black`};
`;

export const ContactHeader = styled.span`
  width: 100%;
  height: 18px;
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0 0 5px;
`;

export const ContactForm = styled.form`
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;
`;

export const ContactInput = styled.input`
  width: 230px;
  height: 100%;
  border-radius: 15px;
  border: 1px solid #a7a7a7;
`;

export const InputContainer = styled.div<{$isComment?:boolean}>`
  width: ${({$isComment})=> $isComment ? `471px` : `230px`};
  height: ${({$isComment})=> $isComment ? `90px` : `60px`};
  &>input{
    width: 100%;
    height: ${({$isComment})=> $isComment ? `60px` : `30px`};
    border-radius: 15px;
    border: 1px solid #a7a7a7;
    outline: none;
    color: black;
    font-size: 18px;
    &::placeholder{
      color: #a7a7a7;
    }
  }
  &>textarea{
    width: 100%;
    height: ${({$isComment})=> $isComment ? `60px` : `30px`};
    border-radius: 15px;
    border: 1px solid #a7a7a7;
    outline: none;
    color: black;
    font-size: 18px;
    &::placeholder{
      color: #a7a7a7;
    }
  }
`;

export const PlaceholderText = styled.span`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: flex-end;
  font-size: 18px;
  color: #a7a7a7;
  padding-left: 5px;
`;

export const DeliveryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 20px 0;
`;

export const Street = styled.span`
  position: absolute;
  left: 250px;
  top:-15px;
  height: 18px;
  font-size: 14px;
`;

export const AdressHeader = styled.span`
  width: 100%;
  height: 18px;
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
`;

export const DeliveryFormContainer = styled.form`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 11px;
  position: relative;
`;

export const Location = styled.div`
  width: 230px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  &>svg{
    width: 20px;
    height: 20px;
    fill:black;
  }
`;

export const StreetInput = styled.input`
    width: 471px;
    height: 30px;
  border-radius: 15px;
  border: 1px solid #a7a7a7;
  
`;

export const LocationInput = styled.input`
    width: 230px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #a7a7a7;

`;

export const Comment = styled.textarea`
  width: 471px;
  height: 60px;
  border-radius: 15px;
  border: 1px solid #a7a7a7;
`;

export const WithMeContainer = styled.div`
    height: 132px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const RestorantHeader = styled.span`
  margin-left: 5px;
  font-size: 18px;
  color: #222;
  padding: 0 0 30px 5px;
  font-weight: 600;
`;

export const Restorant = styled.span`
  width: 100%;
  height: 18px;
  font-size: 14px;
  padding-left:12px ;
`;

export const ChooseRestorantForm = styled.input`
  width: 471px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #a7a7a7;

`;
export const DateAndTimeHeader = styled.span`
  margin-left: 5px;
  width: 100%;
  height: 18px;
  font-size: 18px;
  font-weight: 600;
`;

export const DateAndTimeForm = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap ;
`;

export const Date = styled.span`
  font-size: 14px;
  padding: 2px 10px;
  color: #a7a7a7;
  width: 230px;
`;

export const Time = styled.span`
  font-size: 14px;
  padding: 2px 10px;
  color: #a7a7a7;
  width: 270px;
`;

export const DateSelect = styled(Select)`
  width: 230px;
  height: 30px;
  margin-right: 15px;
  &>div{
    border-radius: 20px;
  }
`;

export const TimeSelect = styled(Select)`
  width: 230px;
  height: 30px;
  &>div{
    border-radius: 20px;
  }
`;

export const PayHeader = styled.span`
  margin-left: 5px;
  width: 100%;
  height: 18px;
  font-size: 18px;
  font-weight: 600;
`;

export const PayForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Coupon = styled.span`
  position: absolute;
  height: 30px;
  display: flex;
  justify-content: left;
  align-items: flex-end;
  font-size: 14px;
  padding: 2px 10px;
  color: #a7a7a7;
  width: 230px;
`;

export const UseCoupon = styled(Select)`
  width: 230px;
  height: 30px;
  margin-right: 10px;
  &>div{
    border-radius: 20px;
  }
`;

export const Empty = styled.div`
  height: 30px;
  color: #a7a7a7;
  width: 230px;
`;

export const Change = styled.input`
  width: 230px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #a7a7a7;
  
`;

export const ChangeButtonContainer = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 34px;
  border: 1px solid #a7a7a7;
  outline: none;
  margin-top: 3px;
  margin-left: 10px;
`;

export const ChangeButtonCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const WithoutChange = styled.span`
  color: #a7a7a7;
  font-size: 16px;
  margin: auto 0 auto 10px;
`;

export const TypeOfPayment = styled.select`
  width: 230px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #a7a7a7;

`;

export const PayBlock = styled.div`
  width: 252px;
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Whole = styled.h1`
  width: 100%;
`;

export const PriceContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`;

export const Price = styled.span`
`;

export const Grn = styled.span``;

export const OrderButton = styled.button``;

export const RightContainer = styled.div`
  width: 528px;
  height: 1106px;
  border: 1px solid black;
`;
