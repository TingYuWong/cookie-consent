import { useEffect, useState } from 'react';

import CookieConsent from '@/components/CookieConsent';

function App() {
  const [isConsent, setIsConsent] = useState(true);

  useEffect(() => {
    setIsConsent(Boolean(localStorage.getItem('cookie-allowed')));
  }, []);

  return (
    <div>
      {isConsent ? (
        <div>Already set cookie consent before.</div>
      ) : (
        <CookieConsent onCloseConsent={() => setIsConsent(true)} />
      )}
    </div>
  );
}

export default App;
