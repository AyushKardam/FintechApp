
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CreditCard, 
  Wallet, 
  Gift, 
  TrendingUp, 
  Star, 
  MapPin, 
  Phone, 
  Zap,
  ArrowUpRight,
  Bell,
  User,
  Home,
  Receipt,
  Award
} from "lucide-react";

const Index = () => {
  const [creditScore] = useState(756);
  const [totalRewards] = useState(12450);
  const [activeTab, setActiveTab] = useState("home");

  const recentTransactions = [
    { id: 1, merchant: "Local Grocery Store", amount: 1200, category: "Food", cashback: 24 },
    { id: 2, merchant: "Petrol Pump", amount: 2500, category: "Fuel", cashback: 50 },
    { id: 3, merchant: "Medical Store", amount: 850, category: "Health", cashback: 17 },
  ];

  const localOffers = [
    { id: 1, title: "5% Cashback", subtitle: "Local Restaurants", icon: "🍽️" },
    { id: 2, title: "3% Rewards", subtitle: "Grocery Stores", icon: "🛒" },
    { id: 3, title: "10% Off", subtitle: "Petrol Pumps", icon: "⛽" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cred-bg via-cred-dark to-cred-bg">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cred-purple to-cred-gold flex items-center justify-center animate-glow">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">Good Evening</h1>
            <p className="text-sm text-gray-400">Manage your finances smartly</p>
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

      {/* Credit Score Card */}
      <div className="px-6 mb-6 animate-fade-in">
        <Card className="glass-card border-0 bg-gradient-to-r from-cred-purple/20 to-cred-gold/20 p-6">
          <CardContent className="p-0">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Credit Score</p>
                <h2 className="text-3xl font-bold gradient-text">{creditScore}</h2>
                <p className="text-sm text-green-400 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +23 this month
                </p>
              </div>
              <div className="w-20 h-20 rounded-full border-4 border-cred-gold/30 flex items-center justify-center">
                <Star className="w-8 h-8 text-cred-gold" />
              </div>
            </div>
            <Progress value={85} className="h-2 bg-gray-700" />
          </CardContent>
        </Card>
      </div>

      {/* Rewards Section */}
      <div className="px-6 mb-6 animate-slide-up">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Your Rewards</h3>
          <Button variant="ghost" size="sm" className="text-cred-gold">
            View All
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        
        <Card className="glass-card border-0 mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-cred-gold/20 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-cred-gold" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Total Rewards</h4>
                  <p className="text-sm text-gray-400">Available to redeem</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-cred-gold">₹{totalRewards.toLocaleString()}</p>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-0">
                  +₹245 this week
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Local Offers */}
        <div className="grid grid-cols-3 gap-3">
          {localOffers.map((offer) => (
            <Card key={offer.id} className="glass-card border-0 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <CardContent className="p-3 text-center">
                <div className="text-2xl mb-2">{offer.icon}</div>
                <p className="text-sm font-medium text-white mb-1">{offer.title}</p>
                <p className="text-xs text-gray-400">{offer.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentTransactions.map((transaction, index) => (
            <Card key={transaction.id} className="glass-card border-0" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-cred-purple/20 flex items-center justify-center">
                      <Receipt className="w-5 h-5 text-cred-purple" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{transaction.merchant}</p>
                      <p className="text-sm text-gray-400">{transaction.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">₹{transaction.amount}</p>
                    <p className="text-sm text-green-400">+₹{transaction.cashback} cashback</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-20">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button className="glow-button h-16 bg-gradient-to-r from-cred-purple to-cred-purple/80 hover:from-cred-purple/90 hover:to-cred-purple text-white border-0">
            <div className="flex flex-col items-center">
              <Phone className="w-5 h-5 mb-1" />
              <span className="text-sm">Pay Bills</span>
            </div>
          </Button>
          <Button className="glow-button h-16 bg-gradient-to-r from-cred-gold to-cred-gold/80 hover:from-cred-gold/90 hover:to-cred-gold text-cred-dark border-0">
            <div className="flex flex-col items-center">
              <Gift className="w-5 h-5 mb-1" />
              <span className="text-sm">Redeem</span>
            </div>
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-cred-card/80 backdrop-blur-xl border-t border-white/10">
        <div className="flex items-center justify-around py-3">
          {[
            { id: "home", icon: Home, label: "Home" },
            { id: "cards", icon: CreditCard, label: "Cards" },
            { id: "rewards", icon: Award, label: "Rewards" },
            { id: "offers", icon: MapPin, label: "Offers" },
          ].map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 h-auto py-2 ${
                activeTab === tab.id ? "text-cred-purple" : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-xs">{tab.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
