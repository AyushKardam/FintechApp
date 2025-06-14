
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { QrCode, Users, Shield, Star } from 'lucide-react';

const AgentReferral = () => {
  const navigate = useNavigate();
  const [referralCode, setReferralCode] = useState('');
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const agents = [
    {
      id: '1',
      name: 'Priya Sharma',
      location: 'Kanpur, UP',
      experience: '3 years',
      customers: 245,
      rating: 4.8,
      photo: '👩‍💼'
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      location: 'Bhopal, MP',
      experience: '5 years',
      customers: 412,
      rating: 4.9,
      photo: '👨‍💼'
    },
    {
      id: '3',
      name: 'Sunita Devi',
      location: 'Patna, Bihar',
      experience: '2 years',
      customers: 156,
      rating: 4.7,
      photo: '👩‍💼'
    }
  ];

  const handleContinue = () => {
    navigate('/onboarding/kyc');
  };

  const scanQRCode = () => {
    // Mock QR scan
    setReferralCode('AGENT123');
    setSelectedAgent('1');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cred-bg via-cred-dark to-cred-bg p-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 mt-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            Community Agent
          </h1>
          <p className="text-gray-400">
            Connect with a trusted local agent for support
          </p>
        </div>

        {/* QR Scanner */}
        <Card className="glass-card border-0 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-cred-purple/20 rounded-full flex items-center justify-center">
                <QrCode className="w-8 h-8 text-cred-purple" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium">Scan Agent QR Code</h3>
                <p className="text-gray-400 text-sm">Get instant verification</p>
              </div>
              <Button
                onClick={scanQRCode}
                className="bg-cred-purple hover:bg-cred-purple/90"
              >
                Scan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Manual Code Input */}
        <Card className="glass-card border-0 mb-6">
          <CardContent className="p-6">
            <h3 className="text-white font-medium mb-4">Enter Referral Code</h3>
            <Input
              placeholder="Enter agent code"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
            />
          </CardContent>
        </Card>

        {/* Available Agents */}
        <div className="mb-8">
          <h3 className="text-white font-medium mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Available Agents Nearby
          </h3>
          <div className="space-y-3">
            {agents.map((agent) => (
              <Card
                key={agent.id}
                className={`cursor-pointer transition-all glass-card border-0 ${
                  selectedAgent === agent.id
                    ? 'bg-cred-purple/20 border-cred-purple'
                    : 'hover:bg-white/10'
                }`}
                onClick={() => setSelectedAgent(agent.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{agent.photo}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-white font-medium">{agent.name}</h4>
                        <Shield className="w-4 h-4 text-green-400" />
                      </div>
                      <p className="text-gray-400 text-sm">{agent.location}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-xs text-gray-400">{agent.experience}</span>
                        <span className="text-xs text-gray-400">{agent.customers} customers</span>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-400 ml-1">{agent.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Button
          onClick={handleContinue}
          className="w-full bg-gradient-to-r from-cred-purple to-cred-purple/80 hover:from-cred-purple/90 hover:to-cred-purple text-white h-14 text-lg"
        >
          Continue to Verification
        </Button>

        <Button
          onClick={handleContinue}
          variant="ghost"
          className="w-full text-gray-400 mt-4"
        >
          Skip for now
        </Button>
      </div>
    </div>
  );
};

export default AgentReferral;
