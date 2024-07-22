import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import * as $ from './Modal.styled';
import { PropsType } from './Modal.type';

const Modal = ({ open, onClose, title = '', children, cross = false }: PropsType) => {
  return (
    <>
      {open &&
        createPortal(
          <>
            <$.Bg onClick={onClose}></$.Bg>
            <$.Wrap>
              <$.Top>
                <$.Title>{title}</$.Title>
                {cross && <$.Cross></$.Cross>}
              </$.Top>
              <$.Middle>{children}</$.Middle>
            </$.Wrap>
          </>,
          document.body,
        )}
    </>
  );
};

export default Modal;
