
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, CreditCard, PiggyBank, Shield, HelpCircle } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/dashboard' },
    { id: 'loan', icon: CreditCard, label: 'Loan', path: '/loan' },
    { id: 'save', icon: PiggyBank, label: 'Save', path: '/savings' },
    { id: 'insure', icon: Shield, label: 'Insure', path: '/insurance' },
    { id: 'help', icon: HelpCircle, label: 'Help', path: '/help' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-cred-card/95 backdrop-blur-xl border-t border-white/10 z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 h-auto py-3 px-2 ${
                isActive ? 'text-cred-purple' : 'text-gray-400'
              }`}
              onClick={() => navigate(item.path)}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
