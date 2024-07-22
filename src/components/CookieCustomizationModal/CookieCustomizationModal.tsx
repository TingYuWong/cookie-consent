import { useState } from 'react';

import Button from '@/components/prototypes/Button';
import Modal from '@/components/prototypes/Modal';
import { BUTTON_COLOR_THEME } from '@/enum/ButtonColor.enum';

import * as $ from './CookieCustomizationModal.styled';
import { PropsType } from './CookieCustomizationModal.type';

const CookieCustomizationModal = ({ open, onClose, onAccept, onDecline }: PropsType) => {
  const [isAnalytics, setIsAnalytics] = useState(false);
  const [isMarketing, setIsAMarketing] = useState(false);

  const handleAccept = () => {
    onAccept();
    onClose();
  };

  const handleDecline = () => {
    onDecline();
    onClose();
  };

  const handleSave = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <$.Wrap>
        <$.Block>
          <$.TitleRow>
            <$.Title>Essentials</$.Title>
            <$.Toggle>
              <$.StyledSwitch checked={true} disabled inputProps={{ 'aria-label': 'controlled' }} />
            </$.Toggle>
          </$.TitleRow>
          <$.Content>
            These cookies are essential for the proper functioning of our services and cannot be disabled.
          </$.Content>
        </$.Block>
        <$.Block>
          <$.TitleRow>
            <$.Title>Analytics</$.Title>
            <$.Toggle>
              <$.StyledSwitch
                checked={isAnalytics}
                onChange={(e) => setIsAnalytics(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </$.Toggle>
          </$.TitleRow>
          <$.Content>
            These cookies collect information about how you use our services or potential errors you encounter. Based on
            this information we are able to improve your experience and react to any issues.
          </$.Content>
        </$.Block>
        <$.Block>
          <$.TitleRow>
            <$.Title>Marketing</$.Title>
            <$.Toggle>
              <$.StyledSwitch
                checked={isMarketing}
                onChange={(e) => setIsAMarketing(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </$.Toggle>
          </$.TitleRow>
          <$.Content>
            These cookies allow us to show you advertisements relevant to you through our advertising partners.
          </$.Content>
        </$.Block>
        <$.BtnRow>
          <$.First>
            <Button color={BUTTON_COLOR_THEME.PURPLE} onClick={handleAccept}>
              Accept all
            </Button>
            <Button color={BUTTON_COLOR_THEME.WHITE} onClick={handleSave}>
              Save
            </Button>
          </$.First>
          <$.Second>
            <Button color={BUTTON_COLOR_THEME.RED} onClick={handleDecline}>
              Decline all
            </Button>
          </$.Second>
        </$.BtnRow>
      </$.Wrap>
    </Modal>
  );
};

export default CookieCustomizationModal;
