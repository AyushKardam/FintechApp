
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { Language } from '@/types';
import { Volume2, Check } from 'lucide-react';

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
];

const LanguageSelection = () => {
  const navigate = useNavigate();
  const { selectedLanguage, setSelectedLanguage } = useApp();
  const [tempSelected, setTempSelected] = useState(selectedLanguage);

  const playVoiceSample = (language: Language) => {
    // Mock voice sample - in real app would play actual audio
    console.log(`Playing voice sample for ${language.name}`);
  };

  const handleContinue = () => {
    setSelectedLanguage(tempSelected);
    navigate('/onboarding/voice-setup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cred-bg via-cred-dark to-cred-bg p-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 mt-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            Choose Your Language
          </h1>
          <p className="text-gray-400">
            Select your preferred language
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {languages.map((language) => (
            <Card
              key={language.code}
              className={`cursor-pointer transition-all glass-card border-0 ${
                tempSelected.code === language.code
                  ? 'bg-cred-purple/20 border-cred-purple'
                  : 'hover:bg-white/10'
              }`}
              onClick={() => setTempSelected(language)}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{language.flag}</span>
                  <div>
                    <p className="text-white font-medium">{language.name}</p>
                    <p className="text-gray-400 text-sm">{language.nativeName}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      playVoiceSample(language);
                    }}
                    className="text-cred-gold hover:text-cred-gold/80"
                  >
                    <Volume2 className="w-5 h-5" />
                  </Button>
                  {tempSelected.code === language.code && (
                    <Check className="w-5 h-5 text-cred-purple" />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          onClick={handleContinue}
          className="w-full bg-gradient-to-r from-cred-purple to-cred-purple/80 hover:from-cred-purple/90 hover:to-cred-purple text-white h-14 text-lg"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelection;
