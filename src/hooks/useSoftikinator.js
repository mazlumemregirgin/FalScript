import { useState, useCallback } from 'react';
import { PERSONAS, QUESTIONS } from '../data/knowledgeBase';

export const useSoftikinator = () => {
    // Initialize candidates with equal score (0)
    // We will use a simple additive score + threshold approach for robustness
    // Or a probabilistic approch. Let's stick to a robust simpler scoring for this scale.
    // Score range: -100 to 100 for each persona.

    const [candidates, setScores] = useState(
        Object.values(PERSONAS).reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {})
    );

    const [askedQuestions, setAskedQuestions] = useState(new Set());
    const [history, setHistory] = useState([]); // To track flow

    // Calculate entropy/variance to find best next question
    // For each unasked question, calculate:
    // How much does it split the CURRENT Top 3 candidates?
    const getNextQuestion = useCallback((currentCandidates, currentAsked) => {
        // 1. Get List of Unasked Questions
        const availableQuestions = QUESTIONS.filter(q => !currentAsked.has(q.id));

        if (availableQuestions.length === 0) return null;

        // 2. Find currently top candidates (to focus on distinguishing them)
        const sortedCandidates = Object.entries(currentCandidates)
            .sort(([, a], [, b]) => b - a)
            .map(([id]) => id);

        const topCandidates = sortedCandidates.slice(0, 4); // Focus on top 4

        // 3. Score questions based on "Discrimination Power"
        let bestQuestion = null;
        let maxVariance = -1;

        // Fallback: If no good split found, pick first available
        bestQuestion = availableQuestions[0];

        for (const question of availableQuestions) {
            const attr = question.attribute;

            // Calculate how many of the top candidates have this feature as 1 vs -1
            let yesCount = 0;
            let noCount = 0;
            let relevantCount = 0;

            for (const candId of topCandidates) {
                const featureVal = PERSONAS[candId].features[attr];
                if (featureVal === 1) yesCount++;
                else if (featureVal === -1) noCount++;

                if (featureVal !== undefined && featureVal !== 0) relevantCount++;
            }

            // We want a question that splits the top candidates evenly (Wait, roughly 50/50 split of YES/NO is ideal)
            // Ideal: yesCount approx noCount, and relevantCount is high.

            // Simple heuristic: Maximize (Min(yes, no) + relevantCount penalty)
            // Or just standard variance.

            // Let's us a simple "Impact Score":
            // Higher score if it affects top candidates
            // Higher score if it differentiates them (some yes, some no)

            if (relevantCount === 0) continue; // Skip irrelevant questions for top candidates

            const balance = Math.min(yesCount, noCount);
            const score = (balance * 10) + relevantCount;

            // "Balance" is key. If yes=3, no=0 -> Balance=0 (Bad question, doesn't distinguish)
            // If yes=2, no=2 -> Balance=2 (Great question)

            if (score > maxVariance) {
                maxVariance = score;
                bestQuestion = question;
            }
        }

        return bestQuestion;
    }, []);

    const handleAnswer = (question, answer) => {
        // answer: 'yes', 'no', 'maybe'
        const attr = question.attribute;

        setScores(prev => {
            const newScores = { ...prev };

            Object.values(PERSONAS).forEach(persona => {
                const featureVal = persona.features[attr] || 0;

                // Logical Update
                // Feature: 1 (Has it) | User says YES -> Score +
                // Feature: 1 (Has it) | User says NO  -> Score --
                // Feature: -1 (Not)   | User says YES -> Score --
                // Feature: -1 (Not)   | User says NO  -> Score +

                let impact = 0;
                const WEIGHT = 15; // Point weight per question

                if (answer === 'yes') {
                    if (featureVal === 1) impact = WEIGHT;
                    else if (featureVal === -1) impact = -WEIGHT;
                } else if (answer === 'no') {
                    if (featureVal === 1) impact = -WEIGHT;
                    else if (featureVal === -1) impact = WEIGHT;
                } else { // Maybe
                    // Small positive if feature exists
                    if (featureVal === 1) impact = 5;
                }

                newScores[persona.id] += impact;
            });
            return newScores;
        });

        setAskedQuestions(prev => new Set(prev).add(question.id));
        setHistory(prev => [...prev, { q: question.id, a: answer }]);
    };

    const getResults = () => {
        // Normalize and sort
        const maxPossible = Math.max(...Object.values(candidates));

        const sorted = Object.entries(candidates)
            .sort(([, a], [, b]) => b - a)
            .map(([id, score]) => ({
                ...PERSONAS[id],
                score,
                matchRate: maxPossible > 0 ? Math.round(Math.max(0, score) / (maxPossible * 1.2) * 100) + 20 : 0 // Fake normalization for visual goodness
            }));

        // Ensure 0-100 clamp
        return sorted.map(s => ({
            ...s,
            percentage: Math.min(99, Math.max(10, s.matchRate))
        }));
    };

    const reset = () => {
        setScores(Object.values(PERSONAS).reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {}));
        setAskedQuestions(new Set());
        setHistory([]);
    };

    return {
        candidates,
        askedQuestions,
        getNextQuestion,
        handleAnswer,
        getResults,
        reset
    };
};
