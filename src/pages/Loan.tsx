import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowLeft, CreditCard, TrendingUp, Calendar, CheckCircle, AlertCircle, Smartphone, Activity } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
const Loan = () => {
  const navigate = useNavigate();
  const {
    user,
    selectedLanguage
  } = useApp();
  const isEnglish = selectedLanguage.code === 'en';
  const [loanAmount, setLoanAmount] = useState(5000);
  const [selectedTenure, setSelectedTenure] = useState(6);
  const [step, setStep] = useState(1); // 1: eligibility, 2: application, 3: confirmation

  const eligibilityScore = 725;
  const maxLoanAmount = 20000;
  const minLoanAmount = 2000;
  const tenureOptions = [{
    months: 3,
    emi: Math.round(loanAmount / 3),
    label: isEnglish ? '3 Months' : '3 महीने'
  }, {
    months: 6,
    emi: Math.round(loanAmount / 6),
    label: isEnglish ? '6 Months' : '6 महीने'
  }, {
    months: 12,
    emi: Math.round(loanAmount / 12),
    label: isEnglish ? '12 Months' : '12 महीने'
  }];
  const eligibilityFactors = [{
    label: isEnglish ? 'Mobile Activity' : 'मोबाइल एक्टिविटी',
    score: 85,
    icon: Smartphone,
    status: 'good'
  }, {
    label: isEnglish ? 'UPI Transactions' : 'UPI ट्रांजेक्शन',
    score: 78,
    icon: CreditCard,
    status: 'good'
  }, {
    label: isEnglish ? 'Community Score' : 'कम्युनिटी स्कोर',
    score: 90,
    icon: TrendingUp,
    status: 'excellent'
  }, {
    label: isEnglish ? 'Regular Income' : 'रेगुलर इनकम',
    score: 70,
    icon: Activity,
    status: 'fair'
  }];
  const handleApplyLoan = () => {
    setStep(2);
  };
  const handleSubmitApplication = () => {
    setStep(3);
  };
  if (step === 3) {
    return <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 mt-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {isEnglish ? 'Application Successful!' : 'आवेदन सफल!'}
            </h1>
            <p className="text-gray-600">
              {isEnglish ? 'Application Submitted Successfully' : 'Application Submitted Successfully'}
            </p>
          </div>

          <Card className="border-0 shadow-lg mb-6">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-100">
                {isEnglish ? 'Loan Details' : 'लोन की जानकारी'}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {isEnglish ? 'Amount:' : 'राशि:'}
                  </span>
                  <span className="font-semibold">₹{loanAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {isEnglish ? 'Tenure:' : 'अवधि:'}
                  </span>
                  <span className="font-semibold">
                    {selectedTenure} {isEnglish ? 'months' : 'महीने'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">EMI:</span>
                  <span className="font-semibold">₹{Math.round(loanAmount / selectedTenure)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {isEnglish ? 'Status:' : 'स्टेटस:'}
                  </span>
                  <Badge className="bg-yellow-100 text-yellow-700">Under Review</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-blue-50 mb-6">
            <CardContent className="p-4">
              <p className="text-sm text-blue-700 text-center">
                {isEnglish ? '💬 Our agent will contact you soon. You will get approval information in 24-48 hours.' : '💬 आपका एजेंट जल्द ही आपसे संपर्क करेगा। 24-48 घंटे में अप्रूवल की जानकारी मिलेगी।'}
              </p>
            </CardContent>
          </Card>

          <Button onClick={() => navigate('/dashboard')} className="w-full bg-green-600 hover:bg-green-700 h-12">
            {isEnglish ? 'Back to Home' : 'होम पर वापस जाएं'}
          </Button>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6 pb-20">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => step === 1 ? navigate('/dashboard') : setStep(1)} className="rounded-full bg-amber-400 hover:bg-amber-300">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              {isEnglish ? 'Micro Loan' : 'माइक्रो लोन'}
            </h1>
            {!isEnglish && <p className="text-sm text-gray-600">Micro Loan</p>}
          </div>
        </div>

        {step === 1 && <>
            {/* Eligibility Card */}
            <Card className="border-0 shadow-lg mb-6">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-100">
                    {isEnglish ? 'Your Eligibility' : 'आपकी योग्यता • Your Eligibility'}
                  </h3>
                  <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">{eligibilityScore}</span>
                  </div>
                  <p className="text-green-600 font-medium">
                    {isEnglish ? 'Excellent Score!' : 'बहुत अच्छा स्कोर!'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {isEnglish ? `Maximum loan: ₹${maxLoanAmount.toLocaleString()}` : `Maximum loan: ₹${maxLoanAmount.toLocaleString()}`}
                  </p>
                </div>

                <div className="space-y-3">
                  {eligibilityFactors.map((factor, index) => <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <factor.icon className="w-5 h-5 text-gray-600" />
                        <span className="text-sm text-gray-700">{factor.label}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{factor.score}%</span>
                        <div className={`w-2 h-2 rounded-full ${factor.status === 'excellent' ? 'bg-green-500' : factor.status === 'good' ? 'bg-blue-500' : 'bg-yellow-500'}`} />
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            {/* Loan Amount Selector */}
            <Card className="border-0 shadow-lg mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-100">
                  {isEnglish ? 'Select Loan Amount' : 'लोन राशि चुनें • Select Loan Amount'}
                </h3>
                
                <div className="mb-4">
                  <Input type="number" value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value))} min={minLoanAmount} max={maxLoanAmount} className="text-center text-xl font-bold border-green-200 focus:border-green-400" />
                  <input type="range" min={minLoanAmount} max={maxLoanAmount} step={500} value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value))} className="w-full mt-3 accent-green-600" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹{minLoanAmount.toLocaleString()}</span>
                    <span>₹{maxLoanAmount.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tenure Selection */}
            <Card className="border-0 shadow-lg mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-100">
                  {isEnglish ? 'Select Tenure' : 'अवधि चुनें • Select Tenure'}
                </h3>
                
                <div className="grid grid-cols-3 gap-3">
                  {tenureOptions.map(option => <Button key={option.months} variant={selectedTenure === option.months ? "default" : "outline"} className={`flex flex-col h-auto py-4 ${selectedTenure === option.months ? "bg-green-600 hover:bg-green-700" : "border-green-200 hover:bg-green-50"}`} onClick={() => setSelectedTenure(option.months)}>
                      <span className="text-sm font-medium">{option.label}</span>
                      <span className="text-xs opacity-80">₹{option.emi}/month</span>
                    </Button>)}
                </div>
              </CardContent>
            </Card>

            <Button onClick={handleApplyLoan} className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg">
              {isEnglish ? 'Apply for Loan' : 'लोन के लिए आवेदन करें'}
            </Button>
          </>}

        {step === 2 && <>
            <Card className="border-0 shadow-lg mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-100">
                  {isEnglish ? 'Loan Application' : 'लोन आवेदन • Loan Application'}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      {isEnglish ? 'Purpose of Loan' : 'लोन का उद्देश्य • Purpose of Loan'}
                    </label>
                    <select className="w-full p-3 border border-green-200 rounded-lg focus:border-green-400">
                      <option>
                        {isEnglish ? 'Business Expansion' : 'व्यापार विस्तार • Business Expansion'}
                      </option>
                      <option>
                        {isEnglish ? 'Medical Emergency' : 'मेडिकल इमरजेंसी • Medical Emergency'}
                      </option>
                      <option>
                        {isEnglish ? 'Education' : 'शिक्षा • Education'}
                      </option>
                      <option>
                        {isEnglish ? 'Household Needs' : 'घरेलू जरूरत • Household Needs'}
                      </option>
                      <option>
                        {isEnglish ? 'Other' : 'अन्य • Other'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      {isEnglish ? 'Monthly Income' : 'मासिक आय • Monthly Income'}
                    </label>
                    <Input type="number" placeholder="₹15,000" className="border-green-200 focus:border-green-400" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      {isEnglish ? 'Occupation' : 'व्यवसाय • Occupation'}
                    </label>
                    <select className="w-full p-3 border border-green-200 rounded-lg focus:border-green-400">
                      <option>
                        {isEnglish ? 'Shop Owner' : 'दुकानदार • Shop Owner'}
                      </option>
                      <option>
                        {isEnglish ? 'Driver' : 'ड्राइवर • Driver'}
                      </option>
                      <option>
                        {isEnglish ? 'Labor' : 'मजदूर • Labor'}
                      </option>
                      <option>
                        {isEnglish ? 'Artisan' : 'कारीगर • Artisan'}
                      </option>
                      <option>
                        {isEnglish ? 'Other' : 'अन्य • Other'}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-700 font-medium">
                        {isEnglish ? 'Important Information:' : 'जरूरी बातें:'}
                      </p>
                      <ul className="text-xs text-blue-600 mt-1 space-y-1">
                        <li>
                          {isEnglish ? '• No hidden fees' : '• कोई छिपी हुई फीस नहीं'}
                        </li>
                        <li>
                          {isEnglish ? '• Pay on time' : '• समय पर भुगतान करें'}
                        </li>
                        <li>
                          {isEnglish ? '• Your information is secure' : '• आपकी जानकारी सुरक्षित है'}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button onClick={handleSubmitApplication} className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg">
              {isEnglish ? 'Submit Application' : 'आवेदन जमा करें'}
            </Button>
          </>}
      </div>
    </div>;
};
export default Loan;