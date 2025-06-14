
export interface User {
  id: string;
  name: string;
  phone: string;
  language: string;
  aadhaarVerified: boolean;
  communityScore: number;
  agentId?: string;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export interface LoanApplication {
  id: string;
  amount: number;
  purpose: string;
  eligibleAmount: number;
  communityScore: number;
  repaymentDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface SavingsGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  icon: string;
  dueDate: string;
}

export interface InsuranceProduct {
  id: string;
  type: 'life' | 'health' | 'accident';
  name: string;
  premium: number;
  coverage: number;
  description: string;
  isActive: boolean;
}
