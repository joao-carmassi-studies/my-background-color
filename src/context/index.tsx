'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface ContextTypes {
  color: string;
  setColor: (color: string) => void;
}

const AppContext = createContext<undefined | ContextTypes>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColorState] = useState('#464168');

  useEffect(() => {
    const savedColor = localStorage.getItem('my-background-color');
    if (savedColor) setColorState(savedColor);
  }, []);

  const setColor = (newColor: string) => {
    setColorState(newColor);
    localStorage.setItem('my-background-color', newColor);
  };

  return (
    <AppContext.Provider value={{ color, setColor }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
