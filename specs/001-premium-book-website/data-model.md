# Data Model: Premium Book Website for AI-Native-Driven Development

## Entity: Book
- **Fields**:
  - id: string (unique identifier)
  - title: string (title of the book)
  - description: string (brief description of the book)
  - author: string (author of the book)
  - chapters: Chapter[] (array of chapters in the book)
  - publishedDate: Date (when the book was published)
  - status: BookStatus (enum: DRAFT, PUBLISHED, ARCHIVED)

- **Validation Rules**:
  - title is required and must be between 5-200 characters
  - description is required and must be between 10-500 characters
  - author is required and must be between 2-100 characters
  - must have exactly 5 chapters
  - status must be one of the defined enum values

- **Relationships**:
  - Contains many Chapter entities (1 to many)

## Entity: Chapter
- **Fields**:
  - id: string (unique identifier)
  - title: string (title of the chapter)
  - content: string (the MDX content of the chapter)
  - position: number (order of the chapter in the book)
  - topics: Topic[] (array of topics in the chapter)
  - wordCount: number (number of words in the chapter)
  - estimatedReadingTime: number (in minutes)

- **Validation Rules**:
  - title is required and must be between 5-100 characters
  - content is required and must be valid MDX
  - position must be between 1-5 (for this book)
  - must have exactly 2 topics
  - estimatedReadingTime must be > 0

- **Relationships**:
  - Belongs to one Book entity (many to one)
  - Contains many Topic entities (1 to many)

## Entity: Topic
- **Fields**:
  - id: string (unique identifier)
  - title: string (title of the topic)
  - content: string (the MDX content of the topic)
  - position: number (order of the topic in the chapter)
  - chapterId: string (reference to the parent chapter)

- **Validation Rules**:
  - title is required and must be between 5-100 characters
  - content is required and must be valid MDX
  - position must be between 1-2 (for this book)
  - chapterId must reference an existing Chapter

- **Relationships**:
  - Belongs to one Chapter entity (many to one)

## Entity: User
- **Fields**:
  - id: string (unique identifier)
  - name: string (name of the user)
  - email: string (email address of the user)
  - preferences: UserPreferences (object containing user preferences)
  - createdAt: Date (when the user first visited)

- **Validation Rules**:
  - email must be a valid email format
  - name is optional but if provided must be between 2-100 characters

- **Relationships**:
  - May have one or more WaitlistEntry (1 to many)

## Entity: WaitlistEntry
- **Fields**:
  - id: string (unique identifier)
  - userId: string (reference to the user)
  - email: string (email address for the waitlist)
  - name: string (optional name)
  - subscribedAt: Date (when they joined the waitlist)
  - status: WaitlistStatus (enum: ACTIVE, CONFIRMED, REMOVED)

- **Validation Rules**:
  - email is required and must be a valid email format
  - status must be one of the defined enum values
  - userId must reference an existing User or be null

- **Relationships**:
  - Belongs to one User entity (many to one, optional)

## Entity: Page
- **Fields**:
  - id: string (unique identifier)
  - name: PageName (enum: HOME, BOOK, ABOUT, CONTACT)
  - title: string (title of the page)
  - content: string (the MDX content of the page)
  - isPublic: boolean (whether the page is accessible to all users)

- **Validation Rules**:
  - name is required and must be one of the defined enum values
  - title is required and must be between 5-100 characters
  - isPublic defaults to true

## Entity: UserPreferences
- **Fields**:
  - theme: ThemeOption (enum: LIGHT, DARK, SYSTEM)
  - fontSize: number (font size multiplier, default 1)
  - readingProgress: { [chapterId: string]: number } (reading progress by chapter)
  - lastReadChapter: string (ID of the last chapter the user read)

- **Validation Rules**:
  - theme must be one of the defined enum values
  - fontSize must be between 0.8 and 2.0
  - readingProgress values must be between 0 and 1

## State Transitions

### WaitlistEntry State Transitions
- ACTIVE → CONFIRMED (when user confirms subscription)
- ACTIVE → REMOVED (when user unsubscribes)
- CONFIRMED → REMOVED (when user unsubscribes)

### Book Status Transitions
- DRAFT → PUBLISHED (when book is ready for public)
- PUBLISHED → ARCHIVED (when book is no longer available)