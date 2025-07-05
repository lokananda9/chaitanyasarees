
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search, FileText as FileTextIconLucide, MessageSquare, Image as ImageIconLucide } from 'lucide-react'; // Renamed to avoid conflict
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation'; // Assuming this is a bottom nav for mobile views
import { getLogs, searchLogs } from '@/lib/storageUtils';
import { TransactionLog } from '@/lib/types';

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true
  }).format(date);
};

const History = () => {
  const [logs, setLogs] = useState<TransactionLog[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchLogs = () => {
    setIsLoading(true);
    try {
      const logList = searchQuery ? searchLogs(searchQuery) : getLogs();
      setLogs(logList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    } catch (error) { console.error('Error fetching logs:', error); }
    finally { setIsLoading(false); }
  };
  
  useEffect(() => { fetchLogs(); }, [searchQuery]);
  
  const getIconForType = (type: 'message' | 'pdf' | 'image') => {
    switch (type) {
      case 'pdf': return <FileTextIconLucide className="w-5 h-5 text-accent" />;
      case 'image': return <ImageIconLucide className="w-5 h-5 text-accent" />;
      case 'message': default: return <MessageSquare className="w-5 h-5 text-accent" />;
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      {/* Custom Header for this page */}
      <header className="px-4 py-3 bg-card border-b border-border shadow-sm sticky top-0 z-40">
        <h1 className="text-lg font-serif font-semibold text-primary text-center">Transaction History</h1>
      </header>
      
      <main className="flex-grow container max-w-2xl mx-auto px-4 py-6"> {/* Increased max-width */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="Search history by name or content..."
            className="pl-10 rounded-sm h-10 text-sm" // Themed input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="space-y-4">
          {isLoading ? (
            <div className="text-center py-10 text-secondary">Loading history records...</div>
          ) : logs.length > 0 ? (
            logs.map((log) => (
              <Card key={log.id} className="bg-card border-border rounded-sm shadow-sm overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-muted rounded-full mt-1">{getIconForType(log.type)}</div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground text-sm">{log.contactName}</h3>
                      <p className="text-xs text-secondary line-clamp-2 leading-relaxed">{log.content}</p>
                      <p className="text-xs text-muted-foreground mt-1">{formatDate(log.date)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-secondary text-sm">
                {searchQuery ? 'No history records match your search criteria.' : 'No transaction history available yet.'}
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Navigation /> {/* Assumed to be a bottom navigation bar */}
    </div>
  );
};

export default History;
