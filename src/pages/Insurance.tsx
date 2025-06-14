
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  ArrowLeft, 
  Shield, 
  Heart,
  Activity,
  AlertCircle,
  CheckCircle,
  Camera,
  Mic,
  Phone
} from 'lucide-react';

const Insurance = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('products'); // products, claims, help
  const [insuranceProducts, setInsuranceProducts] = useState([
    {
      id: 1,
      type: 'health',
      name: 'स्वास्थ्य बीमा',
      englishName: 'Health Insurance',
      premium: 5,
      coverage: 50000,
      description: 'अस्पताल में भर्ती पर ₹50,000 तक',
      icon: '🏥',
      active: false,
      features: ['डॉक्टर फीस', 'दवाई का खर्च', 'अस्पताल का बिल']
    },
    {
      id: 2,
      type: 'accident',
      name: 'दुर्घटना बीमा',
      englishName: 'Accident Insurance',
      premium: 3,
      coverage: 100000,
      description: 'दुर्घटना में ₹1,00,000 तक',
      icon: '🚑',
      active: true,
      features: ['दुर्घटना में चोट', 'अस्पताल का खर्च', 'मृत्यु पर कवर']
    },
    {
      id: 3,
      type: 'life',
      name: 'जीवन बीमा',
      englishName: 'Life Insurance',
      premium: 8,
      coverage: 200000,
      description: 'परिवार को ₹2,00,000 तक',
      icon: '👨‍👩‍👧‍👦',
      active: false,
      features: ['मृत्यु पर कवर', 'परिवार की सुरक्षा', 'टैक्स बेनिफिट']
    }
  ]);

  const [claims] = useState([
    {
      id: 1,
      type: 'health',
      amount: 25000,
      status: 'approved',
      date: '15 मार्च 2024',
      description: 'अस्पताल में भर्ती'
    },
    {
      id: 2,
      type: 'accident',
      amount: 15000,
      status: 'pending',
      date: '10 मार्च 2024',
      description: 'दुर्घटना में चोट'
    }
  ]);

  const toggleInsurance = (id: number) => {
    setInsuranceProducts(products =>
      products.map(product =>
        product.id === id ? { ...product, active: !product.active } : product
      )
    );
  };

  const getTotalPremium = () => {
    return insuranceProducts.filter(p => p.active).reduce((sum, p) => sum + p.premium, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-20">
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
            <h1 className="text-xl font-bold text-gray-800">माइक्रो बीमा</h1>
            <p className="text-sm text-gray-600">Micro Insurance</p>
          </div>
        </div>

        {/* Premium Summary */}
        <Card className="border-0 shadow-lg mb-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <CardContent className="p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-blue-100 text-sm mb-1">महीने का प्रीमियम • Monthly Premium</p>
                <h2 className="text-3xl font-bold">₹{getTotalPremium()}/महीना</h2>
                <p className="text-blue-200 text-sm">केवल ₹{Math.round(getTotalPremium() / 30)}/दिन</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">परिवार की पूरी सुरक्षा</span>
            </div>
          </CardContent>
        </Card>

        {/* Tab Navigation */}
        <div className="flex bg-white rounded-lg p-1 mb-6 shadow-sm">
          <Button
            variant={activeTab === 'products' ? 'default' : 'ghost'}
            size="sm"
            className={`flex-1 ${activeTab === 'products' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveTab('products')}
          >
            बीमा
          </Button>
          <Button
            variant={activeTab === 'claims' ? 'default' : 'ghost'}
            size="sm"
            className={`flex-1 ${activeTab === 'claims' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveTab('claims')}
          >
            क्लेम
          </Button>
          <Button
            variant={activeTab === 'help' ? 'default' : 'ghost'}
            size="sm"
            className={`flex-1 ${activeTab === 'help' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveTab('help')}
          >
            मदद
          </Button>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-4">
            {insuranceProducts.map((product) => (
              <Card key={product.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                        {product.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.englishName}</p>
                        <p className="text-sm text-blue-600 font-medium">₹{product.premium}/दिन</p>
                      </div>
                    </div>
                    <Switch
                      checked={product.active}
                      onCheckedChange={() => toggleInsurance(product.id)}
                    />
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-gray-700 font-medium mb-2">{product.description}</p>
                    <div className="text-2xl font-bold text-green-600">
                      ₹{product.coverage.toLocaleString()} तक कवर
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800 text-sm">क्या मिलेगा:</h4>
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {product.active && (
                    <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-700 font-medium">सक्रिय • Active</span>
                      </div>
                      <p className="text-xs text-green-600 mt-1">
                        अगला प्रीमियम: 25 मार्च 2024
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            <Card className="border-0 shadow-sm bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-700 font-medium">जरूरी बातें:</p>
                    <ul className="text-xs text-yellow-600 mt-1 space-y-1">
                      <li>• 24 घंटे में क्लेम करें</li>
                      <li>• सभी दस्तावेज़ तैयार रखें</li>
                      <li>• कोई छिपी हुई फीस नहीं</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Claims Tab */}
        {activeTab === 'claims' && (
          <div className="space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
              <Plus className="w-5 h-5 mr-2" />
              नया क्लेम करें
            </Button>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">क्लेम कैसे करें</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Camera className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-800">फोटो अपलोड करें</p>
                      <p className="text-sm text-gray-600">बिल और रिपोर्ट की फोटो</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Mic className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-800">वॉइस नोट भेजें</p>
                      <p className="text-sm text-gray-600">अपनी बात आवाज़ में बताएं</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-800">कॉल करें</p>
                      <p className="text-sm text-gray-600">24x7 हेल्पलाइन उपलब्ध</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800">आपके क्लेम</h3>
              {claims.map((claim) => (
                <Card key={claim.id} className="border-0 shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-800">{claim.description}</p>
                        <p className="text-sm text-gray-500">{claim.date}</p>
                      </div>
                      <Badge 
                        variant={claim.status === 'approved' ? 'default' : 'secondary'}
                        className={claim.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}
                      >
                        {claim.status === 'approved' ? 'मंजूर' : 'पेंडिंग'}
                      </Badge>
                    </div>
                    <p className="text-lg font-semibold text-blue-600">₹{claim.amount.toLocaleString()}</p>
                    {claim.status === 'approved' && (
                      <p className="text-xs text-green-600 mt-1">2-3 दिन में पैसा खाते में आएगा</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Help Tab */}
        {activeTab === 'help' && (
          <div className="space-y-4">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">इमरजेंसी हेल्प</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-red-600 hover:bg-red-700 h-12">
                    <Phone className="w-5 h-5 mr-2" />
                    अस्पताल हेल्पलाइन
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
                    <Phone className="w-5 h-5 mr-2" />
                    क्लेम हेल्पलाइन
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">नजदीकी अस्पताल</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-800">सिटी हॉस्पिटल</p>
                    <p className="text-sm text-gray-600">2.5 km दूर • 24x7 खुला</p>
                    <p className="text-sm text-blue-600">📞 +91-9876543210</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-800">केयर मेडिकल सेंटर</p>
                    <p className="text-sm text-gray-600">3.1 km दूर • 24x7 खुला</p>
                    <p className="text-sm text-blue-600">📞 +91-9876543211</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">एजेंट से मिलें</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xl">👨‍💼</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">राजेश कुमार</p>
                    <p className="text-sm text-gray-600">आपके एरिया के एजेंट</p>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    कॉल करें
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Insurance;
