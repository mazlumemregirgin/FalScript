import React, { useState } from 'react';
import { useSoftikinator } from './hooks/useSoftikinator';
import { QUESTIONS } from './data/knowledgeBase';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultCard from './components/ResultCard';

const App = () => {
    const [gameState, setGameState] = useState('welcome'); // welcome, quiz, result
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [result, setResult] = useState(null);

    const { candidates, askedQuestions, getNextQuestion, handleAnswer, getResults, reset } = useSoftikinator();
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const startGame = () => {
        reset();
        // Use timeout to let reset state propagate if needed, though mostly synchronous here
        const firstQ = getNextQuestion(candidates, new Set());
        setCurrentQuestion(firstQ);
        setGameState('quiz');
    };

    const handleUserAnswer = (answer) => {
        if (!currentQuestion) return;

        handleAnswer(currentQuestion, answer);

        // Delay for animation/UX
        setTimeout(() => {
            // Calculate new state locally to pick next question immediately
            // (Note: In a real app we'd wait for useEffect, but for speed we can approximate or use a ref)
            // With default React batching, 'candidates' inside this specific function scope is STALE (from render start).
            // WE need to wait for re-render to get fresh candidates for getNextQuestion.
            // OR we use the same logic we used in hook. 
            // Best approach: Use a useEffect to watch 'askedQuestions' changes and trigger next question.
        }, 10);
    };

    // Watch for Turn Change
    React.useEffect(() => {
        if (gameState !== 'quiz') return;

        // If we just answered a question (checked by seeing if currentQuestion is in askedQuestions)
        if (currentQuestion && askedQuestions.has(currentQuestion.id)) {

            // Check for Early Win? (e.g. one candidate is 30 points ahead)
            // We want to use all available questions or a higher limit
            const limit = QUESTIONS.length;

            if (askedQuestions.size >= limit) {
                finishGame();
                return;
            }

            const nextQ = getNextQuestion(candidates, askedQuestions);
            if (nextQ) {
                setCurrentQuestion(nextQ);
            } else {
                finishGame();
            }
        }
    }, [candidates, askedQuestions, gameState, currentQuestion]); // Added currentQuestion to dependencies

    const finishGame = () => {
        const results = getResults();
        // Format result to match ResultCard expectation
        setResult({
            persona: results[0],
            topRoles: results.slice(0, 3).map(r => ({ name: r.title, percentage: r.percentage, id: r.id })), // Adapter
            topSectors: results.slice(0, 3).map(r => ({ name: r.sector || "Teknoloji", id: r.id })),
        });
        setGameState('result');
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
            <div className="scanlines"></div>

            <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
                {/* Header - Simple Logo always visible except maybe welcome screen? kept it simple */}
                <div className="absolute top-6 left-6 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="text-xs font-bold font-mono text-emerald-500/50 tracking-[0.2em]">FALSCRIPT_SYS</div>
                </div>

                <main className="flex-1 flex flex-col justify-center items-center py-12">
                    {gameState === 'welcome' && (
                        <WelcomeScreen onStart={startGame} />
                    )}

                    {gameState === 'quiz' && currentQuestion && (
                        <QuizScreen
                            question={currentQuestion}
                            progress={askedQuestions.size + 1}
                            total={QUESTIONS.length}
                            onAnswer={handleUserAnswer}
                        />
                    )}

                    {gameState === 'result' && result && (
                        <ResultCard
                            result={result}
                            onRetry={() => setGameState('welcome')}
                        />
                    )}
                </main>

                <footer className="text-center py-6 text-zinc-800 text-xs font-mono uppercase tracking-widest">
                    System Status: Online • Nodes: {QUESTIONS.length}
                </footer>
            </div>
        </div>
    );
};

export default App;
