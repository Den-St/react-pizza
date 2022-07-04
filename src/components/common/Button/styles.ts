import styled, {css} from "styled-components";

export const BurgerContainer =styled.div`
  height: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: absolute;
  width: 18px;
  right: -40px;
  z-index: 2;
`;

const lineCss = css`
  height: 2px;
  width: 100%;
  background-color: white;
  transition: 0.35s;
  opacity: 1;
`;

export const BurgerSecondLine = styled.div<{$isOpened?: boolean}>`
  ${lineCss};
  ${({$isOpened}) => $isOpened && `transform: rotate(45deg);position: absolute; left: 0;bottom: 0;`};
`;
export const BurgerThirdLine = styled.div<{$isOpened?: boolean}>`
  ${lineCss};
    ${({$isOpened}) => $isOpened && `transform: rotate(135deg);position: absolute; right: 0;bottom: 0;`};
`;

export const BurgerFirstLine = styled.div<{$isOpened?: boolean}>`
  ${lineCss};
  ${({$isOpened}) => $isOpened && `opacity: 0;`};
`;