import { useState, useEffect } from 'react';

export function useSplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [splashLoading, setSplashLoading] = useState(true);

  useEffect(() => {
    // Show splash screen on every page refresh/load
    setShowSplash(true);
    setSplashLoading(true);
    
    // Set loading to false after splash screen completes
    // The splash screen itself handles the 3-second timing
    const timer = setTimeout(() => {
      setIsLoading(false);
      setSplashLoading(false);
    }, 3500); // Wait for splash screen to complete (3s + 0.5s exit animation)

    return () => clearTimeout(timer);
  }, []);

  const hideSplash = () => {
    setShowSplash(false);
    setIsLoading(false);
    setSplashLoading(false);
  };

  const resetSplash = () => {
    setShowSplash(true);
    setIsLoading(true);
    setSplashLoading(true);
  };

  return {
    showSplash,
    isLoading,
    splashLoading,
    hideSplash,
    resetSplash
  };
}
