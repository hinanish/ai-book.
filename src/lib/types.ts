// Types for the Premium Book Website

export interface Chapter {
  id: string;
  title: string;
  content: string; // MDX content
  position: number;
  topics: Topic[];
  wordCount: number;
  estimatedReadingTime: number;
}

export interface Topic {
  id: string;
  title: string;
  content: string; // MDX content
  position: number;
  chapterId: string;
}

export interface WaitlistEntry {
  id: string;
  email: string;
  name?: string;
  subscribedAt: string; // ISO 8601 date string
  status: 'ACTIVE' | 'CONFIRMED' | 'REMOVED';
}

export interface UserPreferences {
  theme: 'LIGHT' | 'DARK' | 'SYSTEM';
  fontSize: number; // 0.8 to 2.0
  readingProgress: { [chapterId: string]: number }; // 0 to 1
  lastReadChapter?: string; // ID of the last chapter the user read
}

export interface Page {
  id: string;
  name: 'HOME' | 'BOOK' | 'ABOUT' | 'CONTACT';
  title: string;
  content: string; // MDX content
  isPublic: boolean;
}