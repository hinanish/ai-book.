import { Chapter } from '@/lib/types';

interface ChapterProgressProps {
  chapters: Chapter[];
  progressByChapter: { [chapterId: string]: number };
}

export function ChapterProgress({ chapters, progressByChapter }: ChapterProgressProps) {
  // Calculate overall progress
  const overallProgress = chapters.length > 0 
    ? Object.values(progressByChapter).reduce((sum, progress) => sum + progress, 0) / chapters.length
    : 0;

  return (
    <div className="bg-card text-card-foreground rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold mb-2">Reading Progress</h3>
      
      <div className="mb-2">
        <div className="flex justify-between text-sm mb-1">
          <span>Overall</span>
          <span>{Math.round(overallProgress * 100)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300" 
            style={{ width: `${overallProgress * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="space-y-2 mt-4">
        {chapters.map((chapter) => {
          const progress = progressByChapter[chapter.id] || 0;
          return (
            <div key={chapter.id} className="text-sm">
              <div className="flex justify-between mb-1">
                <span>Ch. {chapter.position}</span>
                <span>{Math.round(progress * 100)}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-300" 
                  style={{ width: `${progress * 100}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}