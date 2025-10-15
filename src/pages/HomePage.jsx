import React, { useState } from 'react';
import { useQuiz } from '../state/quizContext';
import QuizCard from '../components/quiz/QuizCard';
import "./HomePage.css"

const HomePage = () => {
    const { state } = useQuiz();
    const allQuizzes = state.quizzes;

    const [searchTerm, setSearchTerm] = useState('');

    const filteredQuizzes = allQuizzes.filter(quiz =>
      
        quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="homepage-container">
            <div className="search-bar-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>


            <div className="quiz-list">
   
                {allQuizzes && allQuizzes.length > 0 ? (
                
                    filteredQuizzes.length > 0 ? (
                    
                        filteredQuizzes.map(quiz => (
                            <QuizCard
                                key={quiz.id}
                                id={quiz.id}
                                title={quiz.title}
                                description={quiz.description}
                                questionCount={quiz.questions.length}
                            />
                        ))
                    ) : (
      
                        <p className="empty-state">No quizzes found for "{searchTerm}"</p>
                    )
                ) : (
                
                    <p className="empty-state">No quizzes available. Click the '+' to create one!</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;