import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, CreditCard, PiggyBank, Shield, Bell, User, ArrowUpRight, Plus, TrendingUp, Target, Calendar, Zap, Gift } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import LanguageSelector from '@/components/LanguageSelector';
const Dashboard = () => {
  const {
    user,
    walletBalance,
    savingsGoals,
    selectedLanguage
  } = useApp();
  const isEnglish = selectedLanguage.code === 'en';
  const [upcomingPayments] = useState([{
    name: isEnglish ? 'Mobile Recharge' : 'Mobile Recharge',
    amount: 199,
    dueDate: isEnglish ? 'Tomorrow' : 'कल',
    icon: '📱'
  }, {
    name: isEnglish ? 'Electricity Bill' : 'Electricity Bill',
    amount: 850,
    dueDate: isEnglish ? 'In 3 days' : '3 दिन में',
    icon: '💡'
  }]);
  const quickActions = [{
    id: 'loan',
    icon: '📥',
    label: isEnglish ? 'Get Loan' : 'लोन लें',
    sublabel: 'Get Loan',
    color: 'bg-blue-50 text-blue-600',
    route: '/loan'
  }, {
    id: 'save',
    icon: '💰',
    label: isEnglish ? 'Save Money' : 'पैसे बचाएं',
    sublabel: 'Save Money',
    color: 'bg-green-50 text-green-600',
    route: '/savings'
  }, {
    id: 'insure',
    icon: '🛡️',
    label: isEnglish ? 'Get Insurance' : 'बीमा लें',
    sublabel: 'Get Insurance',
    color: 'bg-purple-50 text-purple-600',
    route: '/insurance'
  }];
  const currentSavingsGoal = savingsGoals[0];
  return <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl text-white font-bold">
              {user?.name?.charAt(0) || 'A'}
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">
                {isEnglish ? `Hello, ${user?.name || 'Friend'}` : `नमस्ते, ${user?.name || 'साथी'}`}
              </h1>
              <p className="text-sm text-green-100">
                {isEnglish ? 'Your Money Partner • Arthik Saathi' : 'आपका पैसा साथी • Arthik Saathi'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <LanguageSelector />
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* My Wallet Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-100 mb-1">
                  {isEnglish ? 'My Wallet' : 'मेरा वॉलेट • My Wallet'}
                </p>
                <h2 className="text-3xl font-bold text-white">₹{walletBalance.toLocaleString()}</h2>
                <p className="text-sm text-green-200 flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {isEnglish ? 'This week +₹150' : 'इस हफ्ते +₹150'}
                </p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Wallet className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <Button size="sm" className="bg-white text-green-600 hover:bg-green-50 flex-1">
                <Plus className="w-4 h-4 mr-2" />
                Add Money
              </Button>
              <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Zap className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {isEnglish ? 'Quick Services' : 'त्वरित सेवाएं • Quick Services'}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {quickActions.map(action => <Card key={action.id} className="hover:shadow-md transition-all duration-300 cursor-pointer border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl ${action.color} flex items-center justify-center text-2xl`}>
                  {action.icon}
                </div>
                <p className="text-sm font-semibold text-gray-100">{action.label}</p>
                {!isEnglish && <p className="text-xs text-gray-500">{action.sublabel}</p>}
              </CardContent>
            </Card>)}
        </div>
      </div>

      {/* Savings Progress */}
      {currentSavingsGoal && <div className="px-6 mt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {isEnglish ? 'Savings Goal' : 'बचत लक्ष्य • Savings Goal'}
            </h3>
            <Button variant="ghost" size="sm" className="text-green-600">
              {isEnglish ? 'View All' : 'सभी देखें'}
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl">
                    {currentSavingsGoal.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100">{currentSavingsGoal.name}</h4>
                    <p className="text-sm text-gray-500">
                      ₹{currentSavingsGoal.currentAmount.toLocaleString()} of ₹{currentSavingsGoal.targetAmount.toLocaleString()}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-0">
                  {Math.round(currentSavingsGoal.currentAmount / currentSavingsGoal.targetAmount * 100)}%
                </Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-500" style={{
              width: `${currentSavingsGoal.currentAmount / currentSavingsGoal.targetAmount * 100}%`
            }} />
              </div>
              <Button size="sm" className="w-full mt-3 bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                {isEnglish ? 'Add ₹100' : '₹100 जोड़ें'}
              </Button>
            </CardContent>
          </Card>
        </div>}

      {/* Upcoming Payments */}
      <div className="px-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {isEnglish ? 'Upcoming Payments' : 'आने वाले भुगतान • Upcoming Payments'}
        </h3>
        <div className="space-y-3">
          {upcomingPayments.map((payment, index) => <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-xl">
                      {payment.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-100">{payment.name}</p>
                      <p className="text-sm text-gray-500">Due {payment.dueDate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-100">₹{payment.amount}</p>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white mt-1">
                      {isEnglish ? 'Pay Now' : 'भुगतान करें'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>

      {/* Rewards Section */}
      <div className="px-6 mt-6 mb-4">
        <Card className="border-0 shadow-sm bg-gradient-to-r from-purple-50 to-pink-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-medium">
                    {isEnglish ? 'Daily Rewards' : 'रोज़ाना रिवार्ड'}
                  </h4>
                  <p className="text-sm text-gray-500">Daily rewards available</p>
                </div>
              </div>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                Claim
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Dashboard;
