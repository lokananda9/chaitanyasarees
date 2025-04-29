
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, History, User } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 bg-white border-t border-gray-200 shadow-sm">
      <Link 
        to="/" 
        className={`flex flex-col items-center justify-center w-full h-full ${activeTab === '/' ? 'text-primary' : 'text-gray-500'}`}
        onClick={() => setActiveTab('/')}
      >
        <Home size={20} />
        <span className="text-xs mt-1">Contacts</span>
      </Link>
      
      <Link 
        to="/history" 
        className={`flex flex-col items-center justify-center w-full h-full ${activeTab === '/history' ? 'text-primary' : 'text-gray-500'}`}
        onClick={() => setActiveTab('/history')}
      >
        <History size={20} />
        <span className="text-xs mt-1">History</span>
      </Link>
      
      {/* Feature for future implementation */}
      <div className="flex flex-col items-center justify-center w-full h-full text-gray-300">
        <User size={20} />
        <span className="text-xs mt-1">Settings</span>
      </div>
    </div>
  );
};

export default Navigation;
