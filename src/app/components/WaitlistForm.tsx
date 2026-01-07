'use client';

import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { validateEmail } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
}

export function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [waitlistEntries, setWaitlistEntries] = useLocalStorage<any[]>('waitlistEntries', []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.email) {
      setError('Email is required');
      return false;
    }
    
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    if (waitlistEntries.some(entry => entry.email === formData.email)) {
      setError('This email is already on the waitlist');
      return false;
    }
    
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Save to localStorage
      const newEntry = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        subscribedAt: new Date().toISOString(),
        status: 'ACTIVE' as const
      };

      setWaitlistEntries([...waitlistEntries, newEntry]);
      setIsSubmitted(true);
      setFormData({ name: '', email: '' });
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
        <p className="text-muted-foreground">
          Thank you for joining our waitlist. We'll notify you when new content is available.
        </p>
        <Button 
          variant="link" 
          className="mt-4 p-0 h-auto"
          onClick={() => setIsSubmitted(false)}
        >
          Submit another email
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name (optional)</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-input rounded-md bg-background"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-input rounded-md bg-background"
          placeholder="your@email.com"
          required
        />
      </div>
      
      {error && (
        <div className="text-sm text-destructive">
          {error}
        </div>
      )}
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}