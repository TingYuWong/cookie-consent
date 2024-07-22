import { ReactNode } from 'react';

import { BUTTON_COLOR_THEME } from '@/enum/ButtonColor.enum';

import * as $ from './Button.styled.ts';

const Button: React.FC<{ color: BUTTON_COLOR_THEME; children: ReactNode; onClick: () => void }> = ({
  color,
  children,
  onClick,
}) => {
  return (
    <$.Wrap $color={color} onClick={onClick}>
      {children}
    </$.Wrap>
  );
};

export default Button;
