
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Phone, CreditCard, CheckCircle } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { User } from '@/types';

const KYC = () => {
  const navigate = useNavigate();
  const { setUser, setIsOnboarded, selectedLanguage } = useApp();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    aadhaar: '',
    otp: ''
  });
  const [otpSent, setOtpSent] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sendOTP = () => {
    setOtpSent(true);
    console.log('OTP sent to Aadhaar-linked mobile');
  };

  const verifyOTP = () => {
    // Mock verification
    const newUser: User = {
      id: '1',
      name: formData.name,
      phone: formData.phone,
      language: selectedLanguage.code,
      aadhaarVerified: true,
      communityScore: 725
    };
    
    setUser(newUser);
    setIsOnboarded(true);
    navigate('/dashboard');
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2 && !otpSent) {
      sendOTP();
    } else {
      verifyOTP();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cred-bg via-cred-dark to-cred-bg p-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 mt-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Quick Verification
          </h1>
          <p className="text-gray-400">
            Secure your account with Aadhaar OTP
          </p>
        </div>

        <Card className="glass-card border-0 mb-8">
          <CardContent className="p-6">
            {step === 1 ? (
              <div className="space-y-6">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Full Name
                  </label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Enter mobile number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 pl-12"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Aadhaar Number
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="XXXX XXXX XXXX"
                      value={formData.aadhaar}
                      onChange={(e) => handleInputChange('aadhaar', e.target.value)}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 pl-12"
                      maxLength={12}
                    />
                  </div>
                </div>
                
                {otpSent && (
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      OTP
                    </label>
                    <Input
                      placeholder="Enter 6-digit OTP"
                      value={formData.otp}
                      onChange={(e) => handleInputChange('otp', e.target.value)}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      maxLength={6}
                    />
                    <p className="text-green-400 text-xs mt-2 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      OTP sent to Aadhaar-linked mobile
                    </p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        <Button
          onClick={handleContinue}
          disabled={
            (step === 1 && (!formData.name || !formData.phone)) ||
            (step === 2 && !formData.aadhaar) ||
            (otpSent && !formData.otp)
          }
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-14 text-lg disabled:opacity-50"
        >
          {step === 1 
            ? 'Continue' 
            : otpSent 
              ? 'Verify & Complete' 
              : 'Send OTP'
          }
        </Button>

        <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
          <p className="text-blue-400 text-xs">
            🔒 Your Aadhaar data is encrypted and never stored. We only verify your identity for security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KYC;
