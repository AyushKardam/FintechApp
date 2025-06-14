
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Play, Check } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

const VoiceSetup = () => {
  const navigate = useNavigate();
  const { selectedLanguage } = useApp();
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [step, setStep] = useState(1);

  const startRecording = () => {
    setIsRecording(true);
    // Mock recording - in real app would use Web Audio API
    setTimeout(() => {
      setIsRecording(false);
      setHasRecording(true);
    }, 3000);
  };

  const playInstructions = () => {
    console.log('Playing voice instructions in', selectedLanguage.name);
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else {
      navigate('/onboarding/agent-referral');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cred-bg via-cred-dark to-cred-bg p-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 mt-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            Voice Setup
          </h1>
          <p className="text-gray-400">
            {step === 1 ? 'Listen to instructions' : 'Record your voice for verification'}
          </p>
        </div>

        {step === 1 ? (
          <Card className="glass-card border-0 mb-8">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-cred-gold/20 rounded-full flex items-center justify-center">
                <Play className="w-12 h-12 text-cred-gold" />
              </div>
              <h3 className="text-white text-lg font-medium mb-4">
                Listen to Instructions
              </h3>
              <p className="text-gray-400 mb-6">
                Tap to hear how to use voice features in {selectedLanguage.nativeName}
              </p>
              <Button
                onClick={playInstructions}
                className="bg-cred-gold hover:bg-cred-gold/90 text-cred-dark font-medium"
              >
                <Play className="w-4 h-4 mr-2" />
                Play Instructions
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="glass-card border-0 mb-8">
            <CardContent className="p-8 text-center">
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center transition-all ${
                isRecording ? 'bg-red-500/20 animate-pulse' : hasRecording ? 'bg-green-500/20' : 'bg-cred-purple/20'
              }`}>
                {hasRecording ? (
                  <Check className="w-12 h-12 text-green-400" />
                ) : isRecording ? (
                  <MicOff className="w-12 h-12 text-red-400" />
                ) : (
                  <Mic className="w-12 h-12 text-cred-purple" />
                )}
              </div>
              <h3 className="text-white text-lg font-medium mb-4">
                {hasRecording ? 'Recording Complete!' : isRecording ? 'Recording...' : 'Record Your Voice'}
              </h3>
              <p className="text-gray-400 mb-6">
                {hasRecording 
                  ? 'Your voice has been recorded successfully' 
                  : isRecording 
                    ? 'Speak clearly for 3 seconds' 
                    : 'Say: "My name is [Your Name]" in your preferred language'
                }
              </p>
              {!hasRecording && (
                <Button
                  onClick={startRecording}
                  disabled={isRecording}
                  className={`${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-cred-purple hover:bg-cred-purple/90'} text-white font-medium`}
                >
                  {isRecording ? (
                    <>
                      <MicOff className="w-4 h-4 mr-2" />
                      Recording...
                    </>
                  ) : (
                    <>
                      <Mic className="w-4 h-4 mr-2" />
                      Start Recording
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        <Button
          onClick={handleContinue}
          disabled={step === 2 && !hasRecording}
          className="w-full bg-gradient-to-r from-cred-purple to-cred-purple/80 hover:from-cred-purple/90 hover:to-cred-purple text-white h-14 text-lg disabled:opacity-50"
        >
          {step === 1 ? 'Next Step' : 'Continue'}
        </Button>
      </div>
    </div>
  );
};

export default VoiceSetup;
