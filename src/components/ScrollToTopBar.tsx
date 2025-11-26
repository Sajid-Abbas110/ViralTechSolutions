// ScrollToTop.jsx (or ScrollToTop.tsx)

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This scrolls the window to the top (0, 0) whenever the pathname changes.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component renders nothing, it just handles the side effect.
}