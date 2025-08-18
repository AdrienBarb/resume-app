'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { Loader2, Send, MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface LlmInputProps {
  className?: string;
}

const LlmInput: React.FC<LlmInputProps> = ({ className = '' }) => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    router.push('/payment');
    return;
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Ask our AI about resume building..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={isLoading || !message.trim()}
            className="px-6"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>
      </form>

      {/* Response Display */}
      {(response || error) && (
        <Card className="mt-4 border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-primary-dark" />
              </div>
              <div className="flex-1">
                {error && (
                  <div className="text-red-600 text-sm">
                    <strong>Error:</strong> {error}
                  </div>
                )}
                {response && (
                  <div className="text-gray-700">
                    <strong className="text-primary-dark">AI Assistant:</strong>{' '}
                    {response}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LlmInput;
