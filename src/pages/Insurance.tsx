
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Shield, 
  Heart, 
  Car, 
  Home, 
  ArrowRight, 
  CheckCircle,
  Plus,
  Upload,
  Phone,
  Calendar,
  Bell,
  User,
  TrendingUp
} from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import LanguageSelector from '@/components/LanguageSelector';

const Insurance = () => {
  const { user, selectedLanguage } = useApp();
  const isEnglish = selectedLanguage.code === 'en';
  
  const [insuranceProducts, setInsuranceProducts] = useState([
    {
      id: '1',
      type: 'life',
      name: isEnglish ? 'Life Insurance' : 'जीवन सुरक्षा',
      premium: 500,
      coverage: 100000,
      description: isEnglish ? 'Keep your family safe and secure.' : 'अपने परिवार को सुरक्षित रखें।',
      isActive: true,
    },
    {
      id: '2',
      type: 'health',
      name: isEnglish ? 'Health Insurance' : 'स्वास्थ्य बीमा',
      premium: 800,
      coverage: 50000,
      description: isEnglish ? 'Stay protected from hospital expenses.' : 'अस्पताल के खर्चों से सुरक्षित रहें।',
      isActive: false,
    },
    {
      id: '3',
      type: 'accident',
      name: isEnglish ? 'Accident Insurance' : 'दुर्घटना बीमा',
      premium: 300,
      coverage: 20000,
      description: isEnglish ? 'Protection from accident-related expenses.' : 'दुर्घटना के कारण होने वाले खर्चों से सुरक्षित रहें।',
      isActive: true,
    },
  ]);

  const toggleInsurance = (id: string) => {
    setInsuranceProducts(
      insuranceProducts.map((product) =>
        product.id === id ? { ...product, isActive: !product.isActive } : product
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl text-white font-bold">
              {user?.name?.charAt(0) || 'P'}
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">
                {isEnglish ? `Hello, ${user?.name || 'Friend'}` : `नमस्ते, ${user?.name || 'साथी'}`}
              </h1>
              <p className="text-sm text-orange-100">
                {isEnglish ? 'Your Insurance Partner' : 'आपका बीमा साथी • Your Insurance Partner'}
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

        {/* Insurance Overview Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-100 mb-1">
                  {isEnglish ? 'Total Insurance' : 'कुल बीमा • Total Insurance'}
                </p>
                <h2 className="text-3xl font-bold text-white">₹170,000</h2>
                <p className="text-sm text-orange-200 flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {isEnglish ? 'This month +₹20,000' : 'इस महीने +₹20,000'}
                </p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <Button size="sm" className="bg-white text-orange-600 hover:bg-orange-50 flex-1">
                <Plus className="w-4 h-4 mr-2" />
                {isEnglish ? 'Buy New Insurance' : 'नया बीमा खरीदें'}
              </Button>
              <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Upload className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insurance Products */}
      <div className="px-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {isEnglish ? 'Available Insurances' : 'उपलब्ध बीमा • Available Insurances'}
        </h3>
        <div className="space-y-4">
          {insuranceProducts.map((product) => (
            <Card key={product.id} className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{product.name}</CardTitle>
                <Badge variant={product.isActive ? 'default' : 'destructive'}>
                  {product.isActive ? (isEnglish ? 'Active' : 'सक्रिय') : (isEnglish ? 'Inactive' : 'निष्क्रिय')}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <p className="text-sm text-gray-800 font-semibold">
                      ₹{product.premium}{isEnglish ? '/month' : '/माह'}
                    </p>
                  </div>
                  <Switch id={`insurance-${product.id}`} checked={product.isActive} onCheckedChange={() => toggleInsurance(product.id)} />
                </div>
                <Label htmlFor={`insurance-${product.id}`} className="text-sm text-gray-500 mt-2 block">
                  {isEnglish ? 'Activate Insurance' : 'बीमा सक्रिय करें'}
                </Label>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Health Tips Section */}
      <div className="px-6 mt-6 mb-4">
        <Card className="border-0 shadow-sm bg-gradient-to-r from-pink-50 to-purple-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-medium">
                    {isEnglish ? 'Health Tips' : 'स्वास्थ्य सुझाव'}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {isEnglish ? 'Tips for staying healthy' : 'स्वस्थ रहने के लिए सुझाव'}
                  </p>
                </div>
              </div>
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                {isEnglish ? 'Learn More' : 'और जानें'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Insurance;
