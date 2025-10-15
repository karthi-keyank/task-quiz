import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuiz } from "../state/quizContext";
import CircularProgressBar from "../components/common/CircularProgressBar";
import "./QuizRunnerPage.css"

const QuizRunnerPage = () => {
    const { quizId } = useParams();
    const { state } = useQuiz();
    const navigate = useNavigate();

    const quiz = state.quizzes.find(q => q.id === quizId);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [selectedAnswerId, setSelectedAnswerId] = useState(null);
    const progressPercentage = ((currentQuestionIndex) / quiz.questions.length) * 100;

    if (!quiz) {
        return <div>Quiz not found! Go Back to <a href="/">homepage</a> </div>
    }

    if (!quiz.questions || quiz.questions.length === 0) {
        return (
            <div className="quiz-runner-container">
                <h2>This quiz has no questions!</h2>
                <p>Please add some questions to this quiz first.</p>
                <button className="primary-btn" onClick={() => navigate("/")}>
                    Back to Home
                </button>
            </div>
        );
    }

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const handleAnswerSelect = (selectedId) => {
        if (selectedAnswerId) return;
        setSelectedAnswerId(selectedId);
    };

    const handleNext = () => {

        if (selectedAnswerId === currentQuestion.correctAnswerId) {
            setScore(score + 1);
        }

        if (currentQuestionIndex === quiz.questions.length - 1) {
            setIsCompleted(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswerId(null); 
        }
    };
    
  
    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsCompleted(false);
        setSelectedAnswerId(null);
    };


    const getOptionClass = (option) => {
        if (!selectedAnswerId) return 'option-btn';

        const isCorrect = option.id === currentQuestion.correctAnswerId;
        if (isCorrect) return 'option-btn correct';

        if (option.id === selectedAnswerId) return 'option-btn incorrect';
        
        return 'option-btn disabled';
    };


    if (isCompleted) {
        return (
            <div className="quiz-runner-container results-container">
                <h2>Quiz Completed!</h2>
                <CircularProgressBar score={score} total={quiz.questions.length} />
                <p className="final-score-text">
                    You scored {score} out of {quiz.questions.length}
                </p>
              
                <div className="results-actions">
                    <button className="restart-btn" onClick={handleRestart}>
                        Restart Quiz
                    </button>
                    <button className="primary-btn" onClick={() => navigate("/")}>
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-runner-container">
            <div className="progress-bar-container">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            <h2 className="question-text">{currentQuestion.text}</h2>
            <div className="options-grid">
                {currentQuestion.options.map(option => (
                    <button
                        key={option.id}
                        className={getOptionClass(option)}
                        onClick={() => handleAnswerSelect(option.id)}
                        disabled={selectedAnswerId !== null}
                    >
                        {option.text}
                    </button>
                ))}
            </div>


            {selectedAnswerId && (
                <div className="quiz-footer">
                    <button className="primary-btn next-btn" onClick={handleNext}>
                        {currentQuestionIndex === quiz.questions.length - 1
                            ? 'Finish Quiz'
                            : 'Next →'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizRunnerPage;