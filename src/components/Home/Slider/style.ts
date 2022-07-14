import styled from "styled-components";

export const SliderContainer = styled.div`
  height: 506px;
  width: 1320px;
  border-radius: 30px;
  margin-bottom: 50px;

  & .swiper-pagination {
    display: flex;
    justify-content: space-between;
    margin: 7px auto;
    width: 200px !important;
    height: 50px;
    & .swiper-pagination-bullet {
      cursor: pointer;
      width: 13px !important;
      height: 13px !important;
      background-color: transparent;
      border: 1px solid black;
      border-radius: 50%;
      display: block;
      transition: 0.1s;
      &:hover {
        background-color: #424242;
      }
    }
  }
`;

export const SlideItem =styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;