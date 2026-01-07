import { Chapter } from '@/lib/types';

interface ChapterNavigationProps {
  chapters: Chapter[];
  currentChapterIndex: number;
  onChapterChange: (index: number) => void;
}

export function ChapterNavigation({ chapters, currentChapterIndex, onChapterChange }: ChapterNavigationProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold mb-4">Table of Contents</h3>
      
      <nav>
        <ul className="space-y-2">
          {chapters.map((chapter, index) => (
            <li key={chapter.id}>
              <button
                onClick={() => onChapterChange(index)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  index === currentChapterIndex
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-foreground/80'
                }`}
              >
                <span className="font-medium">Chapter {chapter.position}:</span> {chapter.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}