
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Languages, LogOut } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { Language } from '@/types';
import { useNavigate } from 'react-router-dom';

const languages: Language[] = [
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
];

const LanguageSelector = () => {
  const { selectedLanguage, setSelectedLanguage, setIsOnboarded, setUser } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsOnboarded(false);
    setUser(null);
    navigate('/onboarding/language');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
          <Languages className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-white border border-gray-200 shadow-lg z-50"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setSelectedLanguage(language)}
            className={`flex items-center space-x-3 px-3 py-2 cursor-pointer hover:bg-gray-50 ${
              selectedLanguage.code === language.code ? 'bg-green-50' : ''
            }`}
          >
            <span className="text-xl">{language.flag}</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{language.name}</p>
              <p className="text-xs text-gray-500">{language.nativeName}</p>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="flex items-center space-x-3 px-3 py-2 cursor-pointer hover:bg-red-50 text-red-600"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
