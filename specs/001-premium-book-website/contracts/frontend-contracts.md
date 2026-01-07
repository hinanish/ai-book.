# Frontend Interface Contracts: Premium Book Website

## Overview
This document outlines the interface contracts for the frontend components of the Premium Book Website. Since this is a frontend-focused application with localStorage for data persistence, traditional backend APIs are not applicable.

## Component Interfaces

### BookContent Component
- **Purpose**: Renders the book content with smooth scrolling and progress tracking
- **Props**:
  - `chapters`: Chapter[] - Array of chapter objects to display
  - `onProgressChange`: (progress: number) => void - Callback when reading progress changes
- **State**:
  - `currentChapterIndex`: number - Index of the currently viewed chapter
  - `readingProgress`: number - Progress percentage (0-100)
- **Methods**:
  - `scrollToChapter(index: number)`: void - Scrolls to the specified chapter
  - `updateProgress()`: void - Updates the reading progress based on scroll position

### ChapterNavigation Component
- **Purpose**: Provides navigation between chapters with progress indicators
- **Props**:
  - `chapters`: Chapter[] - Array of chapter objects
  - `currentChapterIndex`: number - Index of the current chapter
  - `onChapterChange`: (index: number) => void - Callback when chapter changes
- **State**:
  - `progressByChapter`: { [chapterId: string]: number } - Progress for each chapter

### ThemeToggle Component
- **Purpose**: Toggles between light and dark themes
- **Props**: None
- **State**:
  - `currentTheme`: 'light' | 'dark' | 'system' - Current theme setting
- **Methods**:
  - `toggleTheme()`: void - Switches between light and dark themes

### WaitlistForm Component
- **Purpose**: Collects user information for the waitlist
- **Props**: None
- **State**:
  - `formData`: { name: string, email: string } - Form input values
  - `isSubmitting`: boolean - Whether the form is being submitted
  - `isSubmitted`: boolean - Whether the form has been successfully submitted
- **Methods**:
  - `handleSubmit(event: React.FormEvent)`: void - Handles form submission
  - `validateForm()`: boolean - Validates form inputs

## Data Access Contracts

### localStorage Interface
- **Purpose**: Store and retrieve waitlist entries and user preferences
- **Methods**:
  - `saveWaitlistEntry(entry: WaitlistEntry)`: Promise<void> - Saves a waitlist entry
  - `getWaitlistEntry(email: string): Promise<WaitlistEntry | null> - Retrieves a waitlist entry by email
  - `saveUserPreferences(preferences: UserPreferences)`: Promise<void> - Saves user preferences
  - `getUserPreferences(): Promise<UserPreferences | null> - Retrieves user preferences
  - `saveReadingProgress(progress: { [chapterId: string]: number })`: Promise<void> - Saves reading progress
  - `getReadingProgress(): Promise<{ [chapterId: string]: number } | null> - Retrieves reading progress

### Data Format Contracts

#### WaitlistEntry Format
```json
{
  "id": "string",
  "email": "string (valid email format)",
  "name": "string (optional)",
  "subscribedAt": "ISO 8601 date string",
  "status": "ACTIVE | CONFIRMED | REMOVED"
}
```

#### UserPreferences Format
```json
{
  "theme": "LIGHT | DARK | SYSTEM",
  "fontSize": "number (0.8 to 2.0)",
  "readingProgress": "{ [chapterId: string]: number (0 to 1) }",
  "lastReadChapter": "string (chapter ID)"
}
```

#### Chapter Format
```json
{
  "id": "string",
  "title": "string (5-100 characters)",
  "content": "string (MDX format)",
  "position": "number (1-5)",
  "topics": "Topic[]",
  "wordCount": "number",
  "estimatedReadingTime": "number (minutes)"
}
```

#### Topic Format
```json
{
  "id": "string",
  "title": "string (5-100 characters)",
  "content": "string (MDX format)",
  "position": "number (1-2)",
  "chapterId": "string"
}
```

## Event Contracts

### Reading Progress Events
- **Event**: `readingProgressChanged`
- **Payload**: `{ chapterId: string, progress: number (0-1) }`
- **Description**: Emitted when the user's reading progress for a chapter changes

### Theme Change Events
- **Event**: `themeChanged`
- **Payload**: `{ theme: 'light' | 'dark' | 'system' }`
- **Description**: Emitted when the user changes the theme

### Waitlist Submission Events
- **Event**: `waitlistSubmitted`
- **Payload**: `{ success: boolean, message: string }`
- **Description**: Emitted when a waitlist submission is processed

## Error Handling Contracts

### Validation Errors
- Components must handle validation errors gracefully
- Form components must display error messages for invalid inputs
- Error messages must be clear and actionable

### Data Loading Errors
- Components must handle cases where data fails to load
- Fallback UI should be provided when content cannot be loaded
- Error boundaries should be implemented to prevent app crashes

## Accessibility Contracts

### ARIA Attributes
- All interactive elements must have appropriate ARIA labels
- Navigation components must be keyboard accessible
- Form elements must have associated labels
- Progress indicators must be announced by screen readers

### Keyboard Navigation
- All functionality must be accessible via keyboard
- Focus management must be implemented for modal dialogs
- Skip links must be provided for main content navigation