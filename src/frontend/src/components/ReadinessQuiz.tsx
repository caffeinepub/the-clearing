import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const QUIZ_QUESTIONS = [
  "Do you take full responsibility for your inner world?",
  "Are you willing to face truths that might be uncomfortable?",
  "Can you sit with uncertainty without needing immediate answers?",
  "Do you value clarity over comfort?",
  "Are you ready to release perspectives that no longer serve you?",
  "Can you meet discomfort without avoiding it?",
  "Do you trust yourself to navigate what you discover?"
];

const PASS_THRESHOLD = 5; // Need 5+ "Yes" answers to pass

export default function ReadinessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
  };

  const yesCount = answers.filter(a => a).length;
  const isPassed = yesCount >= PASS_THRESHOLD;

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8 py-12">
        {isPassed ? (
          <>
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-gold">
                You appear aligned and ready.
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The Clearing™ is designed for individuals like you—those who are prepared to meet themselves with honesty and take responsibility for what they discover.
              </p>
            </div>
            
            <div className="pt-6 space-y-4">
              <Button
                asChild
                size="lg"
                className="text-lg px-12 py-6 bg-gold hover:bg-gold-light text-background font-medium tracking-wide shadow-gold-lg hover:shadow-gold-xl transition-all duration-300"
              >
                <a
                  href="https://tr.ee/TeHpNDTUkY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I'm Ready To Book
                </a>
              </Button>
              
              <div>
                <Button
                  onClick={handleRestart}
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Retake Quiz
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-muted-foreground">
                This may not be the right fit right now.
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Based on your responses, The Clearing™ may not align with where you are at this moment. Consider exploring my other offerings or reaching out with questions.
              </p>
            </div>
            
            <div className="pt-6 space-y-4">
              <Button
                asChild
                size="lg"
                className="text-lg px-12 py-6 bg-muted hover:bg-muted/80 text-foreground font-medium tracking-wide transition-all duration-300"
              >
                <a
                  href="https://www.linktree.com/auroraarcana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Other Services
                </a>
              </Button>
              
              <div>
                <Button
                  onClick={handleRestart}
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Retake Quiz
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  const progressPercentage = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-12">
      {/* Progress Indicator */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
          <Button
            onClick={handleRestart}
            variant="ghost"
            size="sm"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Restart
          </Button>
        </div>
        <Progress value={progressPercentage} className="h-1" />
      </div>

      {/* Question */}
      <div className="text-center space-y-12 py-8">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground leading-relaxed px-4">
          {QUIZ_QUESTIONS[currentQuestion]}
        </h3>

        {/* Answer Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => handleAnswer(true)}
            size="lg"
            className="w-full sm:w-40 text-lg px-8 py-6 bg-gold hover:bg-gold-light text-background font-medium tracking-wide shadow-gold-md hover:shadow-gold-lg transition-all duration-300 hover:scale-105"
          >
            Yes
          </Button>
          
          <Button
            onClick={() => handleAnswer(false)}
            size="lg"
            variant="outline"
            className="w-full sm:w-40 text-lg px-8 py-6 border-2 border-muted-foreground/30 hover:border-muted-foreground/50 text-foreground font-medium tracking-wide transition-all duration-300 hover:scale-105"
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
}
