import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, PiggyBank, Plus, Target, Calendar, TrendingUp, Zap, Gift, Settings } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
const Savings = () => {
  const navigate = useNavigate();
  const {
    savingsGoals,
    walletBalance,
    selectedLanguage
  } = useApp();
  const isEnglish = selectedLanguage.code === 'en';
  const [activeTab, setActiveTab] = useState('goals'); // goals, autosave, rewards
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [newGoalName, setNewGoalName] = useState('');
  const [newGoalAmount, setNewGoalAmount] = useState('');
  const autoSaveRules = [{
    id: 1,
    name: isEnglish ? 'Round Up' : 'राउंड अप',
    description: isEnglish ? 'UPI transaction round up' : 'UPI लेनदेन का राउंड अप',
    amount: 'Variable',
    active: true
  }, {
    id: 2,
    name: isEnglish ? 'Weekly Savings' : 'साप्ताहिक बचत',
    description: isEnglish ? 'Every Friday' : 'हर शुक्रवार',
    amount: '₹100',
    active: false
  }, {
    id: 3,
    name: isEnglish ? 'Daily Savings' : 'दैनिक बचत',
    description: isEnglish ? 'Daily' : 'रोज़ाना',
    amount: '₹20',
    active: true
  }];
  const goalIcons = ['🎉', '🏠', '📚', '🚗', '💍', '🎁', '⚡', '🏥'];
  const totalSaved = savingsGoals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  return <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6 pb-20">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')} className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              {isEnglish ? 'Digital Piggy Bank' : 'डिजिटल गुल्लक'}
            </h1>
            {!isEnglish && <p className="text-sm text-gray-600">Digital Piggy Bank</p>}
          </div>
        </div>

        {/* Savings Summary */}
        <Card className="border-0 shadow-lg mb-6 bg-gradient-to-r from-green-600 to-green-700">
          <CardContent className="p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-green-100 text-sm mb-1">
                  {isEnglish ? 'Total Saved' : 'कुल बचत • Total Saved'}
                </p>
                <h2 className="text-3xl font-bold">₹{totalSaved.toLocaleString()}</h2>
                <p className="text-green-200 text-sm flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {isEnglish ? 'This month +₹450' : 'इस महीने +₹450'}
                </p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <PiggyBank className="w-8 h-8" />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" className="bg-white text-green-600 hover:bg-green-50 flex-1">
                <Plus className="w-4 h-4 mr-2" />
                {isEnglish ? 'Add Money' : 'पैसे जोड़ें'}
              </Button>
              <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tab Navigation */}
        <div className="flex bg-white rounded-lg p-1 mb-6 shadow-sm">
          <Button variant={activeTab === 'goals' ? 'default' : 'ghost'} size="sm" className={`flex-1 ${activeTab === 'goals' ? 'bg-green-600 text-white' : 'text-gray-600'}`} onClick={() => setActiveTab('goals')}>
            {isEnglish ? 'Goals' : 'लक्ष्य • Goals'}
          </Button>
          <Button variant={activeTab === 'autosave' ? 'default' : 'ghost'} size="sm" className={`flex-1 ${activeTab === 'autosave' ? 'bg-green-600 text-white' : 'text-gray-600'}`} onClick={() => setActiveTab('autosave')}>
            {isEnglish ? 'Auto Save' : 'ऑटो सेव'}
          </Button>
          <Button variant={activeTab === 'rewards' ? 'default' : 'ghost'} size="sm" className={`flex-1 ${activeTab === 'rewards' ? 'bg-green-600 text-white' : 'text-gray-600'}`} onClick={() => setActiveTab('rewards')}>
            {isEnglish ? 'Rewards' : 'रिवार्ड्स'}
          </Button>
        </div>

        {/* Goals Tab */}
        {activeTab === 'goals' && <div className="space-y-4">
            {!showAddGoal ? <Button onClick={() => setShowAddGoal(true)} className="w-full bg-green-600 hover:bg-green-700 h-12">
                <Plus className="w-5 h-5 mr-2" />
                {isEnglish ? 'Create New Goal' : 'नया लक्ष्य बनाएं'}
              </Button> : <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">
                    {isEnglish ? 'New Savings Goal' : 'नया बचत लक्ष्य'}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        {isEnglish ? 'Goal Name' : 'लक्ष्य का नाम'}
                      </label>
                      <Input placeholder={isEnglish ? 'e.g: Festival Fund' : 'जैसे: त्योहार फंड'} value={newGoalName} onChange={e => setNewGoalName(e.target.value)} className="border-green-200 focus:border-green-400" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        {isEnglish ? 'Target Amount' : 'लक्ष्य राशि'}
                      </label>
                      <Input type="number" placeholder="₹5,000" value={newGoalAmount} onChange={e => setNewGoalAmount(e.target.value)} className="border-green-200 focus:border-green-400" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        {isEnglish ? 'Choose Icon' : 'आइकन चुनें'}
                      </label>
                      <div className="grid grid-cols-8 gap-2">
                        {goalIcons.map((icon, index) => <Button key={index} variant="outline" size="sm" className="h-10 text-lg hover:bg-green-50">
                            {icon}
                          </Button>)}
                      </div>
                    </div>
                    <div className="flex space-x-2 pt-4">
                      <Button onClick={() => setShowAddGoal(false)} variant="outline" className="flex-1">
                        {isEnglish ? 'Cancel' : 'रद्द करें'}
                      </Button>
                      <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={() => setShowAddGoal(false)}>
                        {isEnglish ? 'Create' : 'बनाएं'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>}

            {savingsGoals.map(goal => <Card key={goal.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl">
                        {goal.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-100">{goal.name}</h4>
                        <p className="text-sm text-gray-500">
                          ₹{goal.currentAmount.toLocaleString()} / ₹{goal.targetAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">
                      {Math.round(goal.currentAmount / goal.targetAmount * 100)}%
                    </Badge>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-500" style={{
                width: `${goal.currentAmount / goal.targetAmount * 100}%`
              }} />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      +₹50
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      +₹100
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      +₹500
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>}

        {/* Auto Save Tab */}
        {activeTab === 'autosave' && <div className="space-y-4">
            <Card className="border-0 shadow-sm bg-blue-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {isEnglish ? 'Smart Saving' : 'स्मार्ट सेविंग'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'Save money automatically' : 'अपने आप पैसे बचाएं'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {autoSaveRules.map(rule => <Card key={rule.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-800">{rule.name}</h4>
                      <p className="text-sm text-gray-500">{rule.description}</p>
                      <p className="text-sm font-medium text-green-600">{rule.amount}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={rule.active ? 'default' : 'secondary'}>
                        {rule.active ? isEnglish ? 'Active' : 'चालू' : isEnglish ? 'Inactive' : 'बंद'}
                      </Badge>
                      <Button size="sm" variant="outline">
                        {rule.active ? isEnglish ? 'Turn Off' : 'बंद करें' : isEnglish ? 'Turn On' : 'चालू करें'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>}

        {/* Rewards Tab */}
        {activeTab === 'rewards' && <div className="space-y-4">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <Gift className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {isEnglish ? 'Daily Rewards' : 'दैनिक रिवार्ड'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {isEnglish ? 'Save consistently and win rewards' : 'लगातार बचत करें और रिवार्ड जीतें'}
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    {isEnglish ? 'Claim Today\'s Reward' : 'आज का रिवार्ड लें'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">
                  {isEnglish ? 'Savings Challenge' : 'बचत चुनौती'}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">
                        {isEnglish ? '7 days continuous saving' : '7 दिन लगातार बचत'}
                      </p>
                      <p className="text-sm text-gray-600">
                        {isEnglish ? 'Win ₹50 bonus' : '₹50 बोनस जीतें'}
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">5/7</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">
                        {isEnglish ? 'Complete ₹1000 savings' : '₹1000 बचत पूरी करें'}
                      </p>
                      <p className="text-sm text-gray-600">
                        {isEnglish ? 'Win ₹100 bonus' : '₹100 बोनस जीतें'}
                      </p>
                    </div>
                    <Badge variant="secondary">780/1000</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>}
      </div>
    </div>;
};
export default Savings;