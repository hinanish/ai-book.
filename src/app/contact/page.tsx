'use client';

import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { WaitlistForm } from '@/app/components/WaitlistForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Stay Updated</h1>
          <p className="text-xl text-muted-foreground">
            Join our waitlist to be notified when new content and features are released
          </p>
        </div>
        
        <div className="bg-card rounded-xl p-8 shadow-sm">
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="font-bold text-lg mb-2">New Chapters</h3>
            <p className="text-muted-foreground">
              Be the first to access new chapters and advanced topics
            </p>
          </div>
          
          <div className="text-center p-6">
            <h3 className="font-bold text-lg mb-2">Resources</h3>
            <p className="text-muted-foreground">
              Get exclusive access to code samples and implementation guides
            </p>
          </div>
          
          <div className="text-center p-6">
            <h3 className="font-bold text-lg mb-2">Community</h3>
            <p className="text-muted-foreground">
              Join our community of AI-Native development practitioners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}