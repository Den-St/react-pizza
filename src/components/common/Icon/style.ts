import styled, {css} from 'styled-components';

export const disabledStyles = css`
  opacity: 0.5;
  pointer-events: none;
`;

export const StyledSvg = styled.svg<{$disabled?: boolean}>`
  ${({color}) => color && `color: ${color};`}
  ${({fill}) => fill && `fill: ${fill};`}
  ${({stroke}) => stroke && `stroke: ${stroke};`}
  ${({$disabled}) => $disabled && disabledStyles};
`;