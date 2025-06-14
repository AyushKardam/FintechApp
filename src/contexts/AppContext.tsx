
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Language } from '@/types';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  selectedLanguage: Language;
  setSelectedLanguage: (language: Language) => void;
  isOnboarded: boolean;
  setIsOnboarded: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

const defaultLanguage: Language = {
  code: 'hi',
  name: 'Hindi',
  nativeName: 'हिंदी',
  flag: '🇮🇳'
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(defaultLanguage);
  const [isOnboarded, setIsOnboarded] = useState(false);

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      selectedLanguage,
      setSelectedLanguage,
      isOnboarded,
      setIsOnboarded
    }}>
      {children}
    </AppContext.Provider>
  );
};
