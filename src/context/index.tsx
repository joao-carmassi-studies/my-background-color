'use client';

import { createContext, useContext, useState } from 'react';

interface ContextTypes {
  color: string;
  setColor: (color: string) => void;
}

const AppContext = createContext<undefined | ContextTypes>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState('#65e07d');

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
