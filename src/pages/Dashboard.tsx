
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Wallet, 
  CreditCard, 
  PiggyBank, 
  Shield, 
  Bell, 
  User,
  ArrowUpRight,
  Plus,
  TrendingUp,
  Target,
  Calendar
} from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

const Dashboard = () => {
  const { user } = useApp();
  const [walletBalance] = useState(2450);
  const [savingsGoal] = useState({ current: 1200, target: 5000, name: 'Festival Fund' });
  const [upcomingPayments] = useState([
    { name: 'Mobile Recharge', amount: 199, dueDate: 'Tomorrow' },
    { name: 'Electricity Bill', amount: 850, dueDate: '3 days' }
  ]);

  const quickActions = [
    { id: 'loan', icon: CreditCard, label: 'Get Loan', color: 'cred-purple', route: '/loan' },
    { id: 'save', icon: PiggyBank, label: 'Save Money', color: 'cred-gold', route: '/savings' },
    { id: 'insure', icon: Shield, label: 'Get Insurance', color: 'green-500', route: '/insurance' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cred-bg via-cred-dark to-cred-bg pb-20">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cred-purple to-cred-gold flex items-center justify-center text-xl">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">
              नमस्ते, {user?.name || 'User'}
            </h1>
            <p className="text-sm text-gray-400">Community Score: {user?.communityScore || 725}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* My Wallet */}
      <div className="px-6 mb-6 animate-fade-in">
        <Card className="glass-card border-0 bg-gradient-to-r from-cred-purple/20 to-cred-gold/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">My Wallet</p>
                <h2 className="text-3xl font-bold gradient-text">₹{walletBalance.toLocaleString()}</h2>
                <p className="text-sm text-green-400 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +₹150 this week
                </p>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-cred-gold/30 flex items-center justify-center">
                <Wallet className="w-8 h-8 text-cred-gold" />
              </div>
            </div>
            <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Plus className="w-4 h-4 mr-2" />
              Add Money
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Card key={action.id} className="glass-card border-0 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-${action.color}/20 flex items-center justify-center`}>
                  <action.icon className={`w-6 h-6 text-${action.color}`} />
                </div>
                <p className="text-sm font-medium text-white">{action.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Savings Progress */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Savings Goal</h3>
          <Button variant="ghost" size="sm" className="text-cred-gold">
            View All
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        
        <Card className="glass-card border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-cred-gold/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-cred-gold" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{savingsGoal.name}</h4>
                  <p className="text-sm text-gray-400">
                    ₹{savingsGoal.current.toLocaleString()} of ₹{savingsGoal.target.toLocaleString()}
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-0">
                {Math.round((savingsGoal.current / savingsGoal.target) * 100)}%
              </Badge>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cred-gold to-cred-gold/80 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(savingsGoal.current / savingsGoal.target) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reminders */}
      <div className="px-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">Upcoming Payments</h3>
        <div className="space-y-3">
          {upcomingPayments.map((payment, index) => (
            <Card key={index} className="glass-card border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{payment.name}</p>
                      <p className="text-sm text-gray-400">Due {payment.dueDate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">₹{payment.amount}</p>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white mt-1">
                      Pay Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
