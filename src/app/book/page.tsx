import { ChapterProgress } from '../book/components/ChapterProgress';
import { ChapterNavigation } from '../book/components/ChapterNavigation';
import { BookContent } from '../book/components/BookContent';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useState } from 'react';

// Define the Chapter type
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

// Static chapter data - in a real implementation, this would come from contentlayer
const chapters: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'Introduction to AI-Native Development',
    content: `# Introduction to AI-Native Development

Welcome to the world of AI-Native Development, where artificial intelligence isn't just an add-on feature but the core foundation of how we build software. This approach fundamentally shifts our perspective from traditional development paradigms to ones where AI capabilities are deeply integrated from the ground up.

## Understanding AI-Native vs Traditional Approaches

Traditional software development treats AI as an enhancement to existing systems. In contrast, AI-Native development starts with AI capabilities as the primary building blocks. This means designing systems where machine learning models, natural language processing, and intelligent automation are integral to the architecture rather than bolted-on features.

The implications of this shift are profound. Instead of building a recommendation engine on top of an existing e-commerce platform, an AI-Native approach would design the entire platform around intelligent recommendations, personalization, and predictive analytics.

## Core Principles of AI-Native Systems

AI-Native systems are built on several foundational principles that distinguish them from traditional applications. First, they embrace uncertainty as a core characteristic rather than something to eliminate. Unlike deterministic systems that produce the same output for a given input, AI-Native systems are probabilistic and adaptive.

Second, these systems are designed for continuous learning and evolution. They incorporate feedback loops that allow them to improve over time without requiring explicit programming changes. This contrasts sharply with traditional systems that require manual updates to modify behavior.

Finally, AI-Native systems are inherently data-driven. Every decision, feature, and interaction is informed by data patterns and insights, making data quality and governance critical aspects of the architecture.`,
    position: 1,
    topics: [],
    wordCount: 0,
    estimatedReadingTime: 0,
  },
  {
    id: 'chapter-2',
    title: 'Designing AI-First Architecture',
    content: `# Designing AI-First Architecture

Creating an AI-First architecture requires a fundamental rethinking of how we structure our systems. Rather than treating AI as an afterthought, we must design our applications with intelligent capabilities at their core. This approach leads to more robust, scalable, and adaptive systems that can evolve with changing requirements and data patterns.

## Principles of AI-First Design

The foundation of AI-First architecture lies in several key principles that guide the design process. First, systems must be designed for adaptability. Traditional architectures often optimize for stability and predictability, but AI-First systems must accommodate constant learning and evolution. This means building flexible data pipelines, modular model architectures, and dynamic decision-making processes.

Second, AI-First design emphasizes the importance of feedback loops. Every interaction with the system should contribute to its learning process, creating a continuous cycle of improvement. This requires careful consideration of how data flows through the system and how insights are captured and utilized.

Third, these architectures must be resilient to uncertainty. AI models inherently deal with probabilities and predictions rather than deterministic outcomes. The architecture must accommodate this uncertainty while still providing reliable user experiences.

## Infrastructure Considerations

Building AI-First systems requires specialized infrastructure that supports both traditional computing and machine learning workflows. This includes robust data storage solutions that can handle diverse data types, scalable compute resources for training and inference, and sophisticated monitoring systems to track model performance and data drift.

The infrastructure must also support the iterative nature of AI development. This means having systems in place for model versioning, experiment tracking, and A/B testing of different approaches. Additionally, the infrastructure should facilitate collaboration between data scientists, ML engineers, and traditional software developers.

Finally, the infrastructure must address the unique challenges of AI systems, such as model drift detection, bias monitoring, and explainability requirements. These considerations are crucial for maintaining trust and reliability in AI-First applications.`,
    position: 2,
    topics: [],
    wordCount: 0,
    estimatedReadingTime: 0,
  },
  {
    id: 'chapter-3',
    title: 'Implementing Intelligent User Experiences',
    content: `# Implementing Intelligent User Experiences

Creating intelligent user experiences goes beyond simply adding AI features to existing interfaces. It requires a fundamental shift in how we think about user interaction, personalization, and system responsiveness. In AI-Native applications, the user interface becomes a dynamic, adaptive layer that responds to user behavior, preferences, and context in real-time.

## Adaptive Interfaces and Personalization

The cornerstone of intelligent user experiences is the ability to adapt to individual users. This goes far beyond simple preference settings or basic recommendation engines. AI-Native interfaces continuously learn from user interactions, adjusting layout, content, and functionality based on observed patterns and predicted needs.

Adaptive interfaces leverage multiple AI techniques, including natural language processing to understand user intent, computer vision to interpret gestures and visual cues, and machine learning to predict user preferences. The result is an interface that feels intuitive and responsive, almost as if it understands the user's needs before they're explicitly expressed.

Personalization in AI-Native systems is also more nuanced than traditional approaches. Rather than simply remembering past choices, these systems anticipate future needs based on behavioral patterns, contextual factors, and similarities with other users. This creates a truly customized experience that evolves with the user over time.

## Real-Time Intelligence and Decision Making

Intelligent user experiences excel at real-time decision making, providing relevant information and options exactly when needed. This requires sophisticated algorithms that can process user inputs, system state, and external data sources instantaneously to provide contextually appropriate responses.

Real-time intelligence manifests in various ways, from predictive text completion and smart search suggestions to dynamic content curation and proactive notifications. The key is to provide value without being intrusive, anticipating user needs while respecting their autonomy and privacy.

These systems must also be transparent about their decision-making processes, helping users understand why certain suggestions or actions are presented. This transparency builds trust and allows users to refine the system's understanding of their preferences over time.`,
    position: 3,
    topics: [],
    wordCount: 0,
    estimatedReadingTime: 0,
  },
  {
    id: 'chapter-4',
    title: 'Data Strategies for AI-Native Systems',
    content: `# Data Strategies for AI-Native Systems

Data is the lifeblood of AI-Native systems, and developing effective data strategies is crucial for success. Unlike traditional applications where data primarily serves as input and output, AI-Native systems treat data as a dynamic asset that drives continuous learning and improvement. This requires sophisticated approaches to data collection, processing, storage, and governance.

## Building Comprehensive Data Pipelines

Effective AI-Native systems require robust data pipelines that can handle diverse data types, volumes, and velocities. These pipelines must be capable of ingesting structured data from databases, unstructured text from user interactions, real-time streams from IoT devices, and multimedia content from various sources.

The design of these pipelines must account for the unique requirements of AI systems, including data quality assurance, feature engineering, and real-time processing capabilities. Data quality is particularly critical since AI models are only as good as the data they're trained on. This necessitates implementing validation checks, anomaly detection, and data cleansing procedures throughout the pipeline.

Furthermore, these pipelines must support bidirectional data flow, not just feeding data into models but also capturing model outputs, user feedback, and system performance metrics. This closed-loop approach enables continuous learning and system improvement.

## Privacy, Ethics, and Governance

As AI-Native systems become more sophisticated in their data utilization, privacy, ethics, and governance considerations become increasingly important. Organizations must develop comprehensive strategies that balance the need for rich, diverse datasets with user privacy rights and ethical considerations.

This includes implementing privacy-preserving techniques such as differential privacy, federated learning, and secure multi-party computation. These approaches allow systems to learn from data without compromising individual privacy. Additionally, organizations must establish clear data governance frameworks that define data ownership, usage rights, and retention policies.

Ethical considerations also play a crucial role in data strategy. This involves identifying and mitigating potential biases in data collection and processing, ensuring fairness in algorithmic decision-making, and maintaining transparency about how data is used to drive system behavior. Regular audits and bias testing should be incorporated into the data strategy to maintain ethical standards over time.`,
    position: 4,
    topics: [],
    wordCount: 0,
    estimatedReadingTime: 0,
  },
  {
    id: 'chapter-5',
    title: 'Future Trends in AI-Native Development',
    content: `# Future Trends in AI-Native Development

The landscape of AI-Native development is rapidly evolving, with new technologies, methodologies, and paradigms emerging regularly. Understanding these trends is crucial for staying ahead in the field and building systems that remain relevant and effective in the coming years. The future of AI-Native development promises even deeper integration of artificial intelligence into the fabric of software systems.

## Emerging Technologies and Paradigms

Several key technologies are shaping the future of AI-Native development. Large Language Models (LLMs) are becoming increasingly sophisticated, enabling more natural and intuitive interactions with software systems. These models are evolving beyond simple text generation to become powerful reasoning engines that can understand complex instructions and generate sophisticated outputs.

Neuromorphic computing represents another frontier, offering hardware architectures that mimic neural networks more closely than traditional processors. This could lead to more efficient AI implementations with lower power consumption and faster processing speeds. Similarly, quantum computing holds promise for solving certain classes of problems that are intractable for classical computers, potentially revolutionizing areas like optimization and cryptography.

Edge AI is also gaining prominence, bringing sophisticated AI capabilities to devices at the network edge. This reduces latency, improves privacy, and enables AI-powered applications in areas with limited connectivity. The convergence of 5G networks and edge computing is creating new possibilities for real-time AI applications.

## Ethical AI and Responsible Development

As AI systems become more powerful and pervasive, ethical considerations are taking center stage in AI-Native development. The industry is moving toward more responsible AI practices that prioritize fairness, accountability, and transparency. This includes developing techniques for explainable AI that can provide clear reasoning for their decisions.

Regulatory frameworks are also evolving to address the challenges posed by AI systems. Developers must stay informed about these regulations and build compliance into their systems from the ground up. This includes implementing audit trails, bias detection mechanisms, and user consent management.

The concept of AI safety is also gaining traction, focusing on ensuring that AI systems behave as intended even in unexpected situations. This involves developing robust testing methodologies, implementing fail-safe mechanisms, and creating systems that can gracefully handle edge cases and adversarial inputs.`,
    position: 5,
    topics: [],
    wordCount: 0,
    estimatedReadingTime: 0,
  },
];

export default function BookPage() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [readingProgress, setReadingProgress] = useLocalStorage<{[chapterId: string]: number}>('readingProgress', {});

  const handleChapterChange = (index: number) => {
    setCurrentChapterIndex(index);
  };

  const handleProgressChange = (chapterId: string, progress: number) => {
    setReadingProgress(prev => ({
      ...prev,
      [chapterId]: progress
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">AI-Native Driven Development</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Chapter Navigation Sidebar */}
          <div className="lg:w-1/4">
            <ChapterNavigation
              chapters={chapters}
              currentChapterIndex={currentChapterIndex}
              onChapterChange={handleChapterChange}
            />

            <div className="mt-6">
              <ChapterProgress
                chapters={chapters}
                progressByChapter={readingProgress}
              />
            </div>
          </div>

          {/* Book Content */}
          <div className="lg:w-3/4">
            <BookContent
              chapters={chapters}
              currentChapterIndex={currentChapterIndex}
              onProgressChange={(progress) => {
                if (chapters[currentChapterIndex]) {
                  handleProgressChange(chapters[currentChapterIndex].id, progress);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}