import styled from 'styled-components';

import {
  BUTTON_ACTIVE_BG_COLOR,
  BUTTON_BASIC_BG_COLOR,
  BUTTON_COLOR_THEME,
  BUTTON_HOVER_BG_COLOR,
} from '@/enum/ButtonColor.enum';

export const Wrap = styled.div<{ $color: BUTTON_COLOR_THEME }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px 14px;
  border-radius: 4px;
  width: 100%;
  box-shadow: ${(props) =>
    props.$color === BUTTON_COLOR_THEME.WHITE ? '0px 2px 4px 0px rgba(0, 0, 0, 0.25);' : 'none'};
  background-color: ${(props) => BUTTON_BASIC_BG_COLOR[props.$color]};
  color: ${(props) => (props.$color === BUTTON_COLOR_THEME.WHITE ? '#171717' : '#fff')};
  &:hover {
    background-color: ${(props) => BUTTON_HOVER_BG_COLOR[props.$color]};
  }
  &:active {
    background-color: ${(props) => BUTTON_ACTIVE_BG_COLOR[props.$color]};
  }
`;
