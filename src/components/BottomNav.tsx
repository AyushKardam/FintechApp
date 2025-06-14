
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, CreditCard, PiggyBank, Shield, HelpCircle } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', icon: Home, label: 'होम', englishLabel: 'Home', path: '/dashboard' },
    { id: 'loan', icon: CreditCard, label: 'लोन', englishLabel: 'Loan', path: '/loan' },
    { id: 'save', icon: PiggyBank, label: 'बचत', englishLabel: 'Save', path: '/savings' },
    { id: 'insure', icon: Shield, label: 'बीमा', englishLabel: 'Insure', path: '/insurance' },
    { id: 'help', icon: HelpCircle, label: 'मदद', englishLabel: 'Help', path: '/help' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-green-200 z-50 shadow-lg">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 h-auto py-3 px-2 min-w-[60px] ${
                isActive ? 'text-green-600 bg-green-50' : 'text-gray-600'
              }`}
              onClick={() => navigate(item.path)}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
