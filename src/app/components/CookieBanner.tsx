import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }

    // Listen for the "Cookie Settings" button click from the footer
    const handleOpenSettings = () => setIsVisible(true);
    window.addEventListener('open-cookie-settings', handleOpenSettings);
    
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-dark border border-rose/20 p-6 shadow-2xl rounded-sm">
        <h3 className="font-playfair text-cream text-lg mb-2 tracking-widest">COOKIE SETTINGS</h3>
        <p className="text-[11px] text-cream/70 leading-relaxed mb-4 font-light">
          We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies as outlined in our 
          <Link to="/privacy" className="text-rose underline ml-1 hover:text-cream transition-colors">Privacy Policy</Link>.
        </p>
        <div className="flex gap-3">
          <button 
            onClick={handleAccept}
            className="flex-1 bg-rose text-dark py-2 text-[10px] uppercase tracking-[2px] hover:bg-cream transition-colors duration-300 font-medium"
          >
            Accept All
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="flex-1 border border-cream/20 text-cream py-2 text-[10px] uppercase tracking-[2px] hover:border-rose transition-colors duration-300 font-light"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};