import { useState } from 'react';

import Button from '@/components/prototypes/Button';
import { BUTTON_COLOR_THEME } from '@/enum/ButtonColor.enum';

import CookieCustomizationModal from '../CookieCustomizationModal';
import * as $ from './CookieConsent.styled';

const CookieConsent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleDecline = () => {};
  const handleAccept = () => {};

  return (
    <>
      <$.Wrap>
        <$.Title>We use cookies</$.Title>
        <$.Content>
          We use cookies to enhance your browsing experience and improve our website's performance. By continuing to use
          this site, you consent to the use of cookies. To learn more about how we use cookies and your options, please
          read our cookie policy.
        </$.Content>
        <$.BtnRow>
          <$.Left>
            <Button color={BUTTON_COLOR_THEME.RED} onClick={handleDecline}>
              Decline All
            </Button>
          </$.Left>
          <$.Right>
            <Button color={BUTTON_COLOR_THEME.PURPLE} onClick={handleAccept}>
              Allow Cookies
            </Button>
            <$.ManageCookies>
              <Button color={BUTTON_COLOR_THEME.WHITE} onClick={() => setIsOpenModal(true)}>
                Manage Cookies
              </Button>
            </$.ManageCookies>
          </$.Right>
        </$.BtnRow>
      </$.Wrap>
      <CookieCustomizationModal
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </>
  );
};

export default CookieConsent;
