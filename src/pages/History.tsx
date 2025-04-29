
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { getLogs, searchLogs } from '@/lib/storageUtils';
import { TransactionLog } from '@/lib/types';

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);
};

const History = () => {
  const [logs, setLogs] = useState<TransactionLog[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchLogs = () => {
    setIsLoading(true);
    try {
      const logList = searchQuery 
        ? searchLogs(searchQuery)
        : getLogs();
      setLogs(logList.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      ));
    } catch (error) {
      console.error('Error fetching logs:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchLogs();
  }, [searchQuery]);
  
  const getIconForType = (type: 'message' | 'pdf' | 'image') => {
    switch (type) {
      case 'pdf':
        return <span className="text-red-500 text-xs font-medium">PDF</span>;
      case 'image':
        return <span className="text-blue-500 text-xs font-medium">IMG</span>;
      case 'message':
      default:
        return <span className="text-green-500 text-xs font-medium">TXT</span>;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="px-4 py-6 bg-white shadow-sm">
        <h1 className="text-xl font-semibold text-center">Transaction History</h1>
      </div>
      
      <div className="container max-w-md mx-auto px-4 py-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search history..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="space-y-3">
          {isLoading ? (
            <div className="text-center py-8">Loading history...</div>
          ) : logs.length > 0 ? (
            logs.map((log) => (
              <Card key={log.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-start p-4">
                    <div className="p-2 bg-gray-100 rounded-md mr-4">
                      {getIconForType(log.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{log.contactName}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{log.content}</p>
                      <p className="text-xs text-gray-500 mt-1">{formatDate(log.date)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              {searchQuery ? 'No history matching your search' : 'No transaction history'}
            </div>
          )}
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default History;
