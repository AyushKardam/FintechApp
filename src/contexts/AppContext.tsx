import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Language, LoanApplication, SavingsGoal, InsuranceProduct } from '@/types';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  selectedLanguage: Language;
  setSelectedLanguage: (language: Language) => void;
  isOnboarded: boolean;
  setIsOnboarded: (value: boolean) => void;
  walletBalance: number;
  setWalletBalance: (amount: number) => void;
  loanApplications: LoanApplication[];
  setLoanApplications: (loans: LoanApplication[]) => void;
  savingsGoals: SavingsGoal[];
  setSavingsGoals: (goals: SavingsGoal[]) => void;
  insuranceProducts: InsuranceProduct[];
  setInsuranceProducts: (products: InsuranceProduct[]) => void;
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
  code: 'en',
  name: 'English',
  nativeName: 'English',
  flag: '🇬🇧'
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(defaultLanguage);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [walletBalance, setWalletBalance] = useState(2450);
  const [loanApplications, setLoanApplications] = useState<LoanApplication[]>([]);
  const [savingsGoals, setSavingsGoals] = useState<SavingsGoal[]>([
    {
      id: '1',
      name: 'Festival Fund',
      targetAmount: 5000,
      currentAmount: 1200,
      icon: '🎉',
      dueDate: '2025-03-15'
    }
  ]);
  const [insuranceProducts, setInsuranceProducts] = useState<InsuranceProduct[]>([]);

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      selectedLanguage,
      setSelectedLanguage,
      isOnboarded,
      setIsOnboarded,
      walletBalance,
      setWalletBalance,
      loanApplications,
      setLoanApplications,
      savingsGoals,
      setSavingsGoals,
      insuranceProducts,
      setInsuranceProducts
    }}>
      {children}
    </AppContext.Provider>
  );
};
