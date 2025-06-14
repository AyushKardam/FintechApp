
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  MessageCircle,
  PlayCircle,
  BookOpen,
  Users,
  Gift,
  Star,
  Phone,
  Video,
  HelpCircle,
  Shield,
  TrendingUp,
  Zap
} from 'lucide-react';

const Help = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('learn'); // learn, support, referral

  const educationalVideos = [
    {
      id: 1,
      title: 'पैसे क्यों बचाने चाहिए?',
      subtitle: 'Why Save Money?',
      duration: '2 मिनट',
      thumbnail: '💰',
      category: 'savings',
      completed: true
    },
    {
      id: 2,
      title: 'लोन कैसे वापस करें?',
      subtitle: 'How to Repay Loans?',
      duration: '3 मिनट',
      thumbnail: '💳',
      category: 'loan',
      completed: false
    },
    {
      id: 3,
      title: 'फ्रॉड से कैसे बचें?',
      subtitle: 'Fraud Prevention',
      duration: '4 मिनट',
      thumbnail: '🔒',
      category: 'security',
      completed: false
    },
    {
      id: 4,
      title: 'बीमा क्यों जरूरी है?',
      subtitle: 'Why Insurance Matters?',
      duration: '3 मिनट',
      thumbnail: '🛡️',
      category: 'insurance',
      completed: true
    }
  ];

  const quizzes = [
    {
      id: 1,
      title: 'बचत क्विज़',
      questions: 5,
      reward: 10,
      completed: true,
      score: 4
    },
    {
      id: 2,
      title: 'लोन क्विज़',
      questions: 5,
      reward: 15,
      completed: false,
      score: null
    }
  ];

  const [referralStats] = useState({
    totalReferrals: 12,
    successfulReferrals: 8,
    totalEarnings: 400,
    currentMonthEarnings: 150
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-6 pb-20">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/dashboard')}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">मदद केंद्र</h1>
            <p className="text-sm text-gray-600">Help & Learning Center</p>
          </div>
        </div>

        {/* Quick Help Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="border-0 shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
            <CardContent className="p-4 text-center">
              <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">WhatsApp चैट</p>
              <p className="text-xs text-gray-600">तुरंत मदद</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
            <CardContent className="p-4 text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">कॉल करें</p>
              <p className="text-xs text-gray-600">24x7 हेल्पलाइन</p>
            </CardContent>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-white rounded-lg p-1 mb-6 shadow-sm">
          <Button
            variant={activeTab === 'learn' ? 'default' : 'ghost'}
            size="sm"
            className={`flex-1 ${activeTab === 'learn' ? 'bg-orange-600 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveTab('learn')}
          >
            सीखें
          </Button>
          <Button
            variant={activeTab === 'support' ? 'default' : 'ghost'}
            size="sm"
            className={`flex-1 ${activeTab === 'support' ? 'bg-orange-600 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveTab('support')}
          >
            सहायता
          </Button>
          <Button
            variant={activeTab === 'referral' ? 'default' : 'ghost'}
            size="sm"
            className={`flex-1 ${activeTab === 'referral' ? 'bg-orange-600 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveTab('referral')}
          >
            रेफरल
          </Button>
        </div>

        {/* Learn Tab */}
        {activeTab === 'learn' && (
          <div className="space-y-6">
            {/* Educational Videos */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                शिक्षा वीडियो • Educational Videos
              </h3>
              <div className="space-y-3">
                {educationalVideos.map((video) => (
                  <Card key={video.id} className="border-0 shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                            {video.thumbnail}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <PlayCircle className="w-6 h-6 text-orange-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-gray-800">{video.title}</h4>
                            {video.completed && (
                              <Badge className="bg-green-100 text-green-700 text-xs">✓</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{video.subtitle}</p>
                          <p className="text-xs text-orange-600">{video.duration}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quizzes */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                क्विज़ • Quiz & Rewards
              </h3>
              <div className="space-y-3">
                {quizzes.map((quiz) => (
                  <Card key={quiz.id} className="border-0 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-800">{quiz.title}</h4>
                          <p className="text-sm text-gray-600">{quiz.questions} सवाल</p>
                          {quiz.completed && (
                            <p className="text-sm text-green-600">स्कोर: {quiz.score}/{quiz.questions}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-2">
                            <Gift className="w-4 h-4 text-orange-600" />
                            <span className="text-sm font-medium text-orange-600">₹{quiz.reward}</span>
                          </div>
                          <Button 
                            size="sm" 
                            className={quiz.completed ? "bg-green-600 hover:bg-green-700" : "bg-orange-600 hover:bg-orange-700"}
                          >
                            {quiz.completed ? 'फिर से करें' : 'शुरू करें'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tips */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">💡 आज की टिप</h3>
                <p className="text-gray-700 mb-3">
                  "हर दिन ₹20 बचाएं तो साल में ₹7,300 जमा होंगे। छोटी बचत, बड़ा फायदा!"
                </p>
                <p className="text-sm text-gray-600">
                  Save ₹20 daily = ₹7,300 yearly. Small savings, big benefits!
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Support Tab */}
        {activeTab === 'support' && (
          <div className="space-y-4">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">तुरंत मदद • Quick Help</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 h-12 justify-start">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    WhatsApp पर चैट करें
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 justify-start">
                    <Phone className="w-5 h-5 mr-3" />
                    हेल्पलाइन कॉल करें
                  </Button>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 h-12 justify-start">
                    <Video className="w-5 h-5 mr-3" />
                    वीडियो कॉल बुक करें
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">आम सवाल • FAQs</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-800">लोन की अप्रूवल में कितना समय लगता है?</p>
                    <p className="text-sm text-gray-600 mt-1">24-48 घंटे में अप्रूवल मिल जाता है।</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-800">क्या मेरी जानकारी सुरक्षित है?</p>
                    <p className="text-sm text-gray-600 mt-1">हाँ, हम बैंक लेवल की सिक्योरिटी इस्तेमाल करते हैं।</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-800">EMI कैसे भरें?</p>
                    <p className="text-sm text-gray-600 mt-1">UPI, नेट बैंकिंग या ऑटो-डेबिट से भर सकते हैं।</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">एजेंट से मिलें</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xl">👩‍💼</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">प्रिया शर्मा</p>
                    <p className="text-sm text-gray-600">आपके एरिया की एजेंट</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">4.8 (245 कस्टमर्स)</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    कॉल करें
                  </Button>
                  <Button size="sm" variant="outline">
                    मिलने का समय
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Referral Tab */}
        {activeTab === 'referral' && (
          <div className="space-y-4">
            {/* Referral Stats */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-600 to-blue-600">
              <CardContent className="p-6 text-white">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold mb-2">रेफरल कमाई</h3>
                  <div className="text-3xl font-bold">₹{referralStats.totalEarnings}</div>
                  <p className="text-green-100 text-sm">कुल कमाई</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold">{referralStats.successfulReferrals}</div>
                    <p className="text-xs text-green-100">सफल रेफरल</p>
                  </div>
                  <div>
                    <div className="text-xl font-bold">₹{referralStats.currentMonthEarnings}</div>
                    <p className="text-xs text-green-100">इस महीने</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Referral Actions */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">दोस्तों को इनवाइट करें</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 h-12">
                    <Users className="w-5 h-5 mr-2" />
                    WhatsApp पर शेयर करें
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    SMS भेजें
                  </Button>
                </div>
                
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">आपका रेफरल कोड:</p>
                  <div className="flex items-center justify-between bg-white p-2 rounded border">
                    <span className="font-mono font-bold">PAISA{referralStats.totalReferrals}ABC</span>
                    <Button size="sm" variant="outline">कॉपी</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Referral Rewards */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">रेफरल रिवार्ड्स</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">नया यूजर जॉइन करे</p>
                      <p className="text-sm text-gray-600">रजिस्ट्रेशन के बाद</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">₹25</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">पहला लोन ले</p>
                      <p className="text-sm text-gray-600">लोन अप्रूवल पर</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">₹50</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">10 दोस्त जॉइन करें</p>
                      <p className="text-sm text-gray-600">माइलस्टोन बोनस</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">₹200</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Help;
