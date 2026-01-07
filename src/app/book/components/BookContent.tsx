'use client';

import { useState, useEffect } from 'react';

interface Chapter {
  id: string;
  title: string;
  content: string;
  position: number;
  topics: Topic[];
  wordCount: number;
  estimatedReadingTime: number;
}

interface Topic {
  id: string;
  title: string;
  content: string;
  position: number;
  chapterId: string;
}

interface BookContentProps {
  chapters: Chapter[];
  currentChapterIndex: number;
  onProgressChange: (progress: number) => void;
}

export function BookContent({ chapters, currentChapterIndex, onProgressChange }: BookContentProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const currentChapter = chapters[currentChapterIndex];

  // Handle scroll-based progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

      setReadingProgress(progress);
      onProgressChange(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onProgressChange]);

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setReadingProgress(0);
  }, [currentChapterIndex]);

  // If no chapters or current chapter is undefined, return a loading state
  if (!currentChapter) {
    return (
      <div className="bg-card text-card-foreground rounded-lg p-6 shadow-sm">
        <p>Loading chapter...</p>
      </div>
    );
  }

  return (
    <div className="bg-card text-card-foreground rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4">{currentChapter.title}</h2>

      <div
        className="prose prose-gray dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(currentChapter.content) }}
      />
    </div>
  );
}

// Simple function to convert markdown to HTML (in a real implementation, use a proper library)
function convertMarkdownToHtml(markdown: string): string {
  // This is a simplified converter - in a real implementation, use a library like remark
  return markdown
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^\> (.*$)/gm, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gm, '<em>$1</em>')
    .replace(/\n\n/gm, '</p><p>')
    .replace(/\n/gm, '<br />')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/gm, '') // Remove empty paragraphs
    .replace(/<p>(<h[1-6]>.*<\/h[1-6]>)<\/p>/gm, '$1') // Don't wrap headings in paragraphs
    .replace(/<p>(<blockquote>.*<\/blockquote>)<\/p>/gm, '$1'); // Don't wrap blockquotes in paragraphs
}