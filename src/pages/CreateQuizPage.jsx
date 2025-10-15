import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../state/quizContext';
import { FaTrash } from 'react-icons/fa';
import {motion , AnimatePresence} from "framer-motion"
import "./CreateQuizPage.css"

const CreateQuizPage = () => {
    const navigate = useNavigate();
    const { dispatch } = useQuiz();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [questions, setQuestions] = useState([]);

    const handleGoBack = () => navigate(-1);

    const handleAddQuestion = () => {
        setQuestions([...questions, {
            id: `q_${Date.now()}`,
            text: '',
            options: [
                { id: `o1_${Date.now()}`, text: '' },
                { id: `o2_${Date.now()}`, text: '' },
                { id: `o3_${Date.now()}`, text: '' },
                { id: `o4_${Date.now()}`, text: '' },
            ],
            correctAnswerId: '',
        }]);
    };

    const handleRemoveQuestion = (indexToRemove) => {
        setQuestions(questions.filter((_, index) => index !== indexToRemove));
    };

    const handleQuestionTextChange = (qIndex, newText) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].text = newText;
        setQuestions(updatedQuestions);
    };

    const handleOptionTextChange = (qIndex, oIndex, newText) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].options[oIndex].text = newText;
        setQuestions(updatedQuestions);
    };

    const handleCorrectAnswerChange = (qIndex, optionId) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].correctAnswerId = optionId;
        setQuestions(updatedQuestions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (questions.length === 0) {
            alert("Please add at least one question before saving.");
            return;
        }
        const newQuiz = {
            id: `quiz_${Date.now()}`,
            title,
            description,
            questions,
            author: "karthi",
            createdAt: new Date().toISOString(),
        };
        dispatch({ type: 'ADD_QUIZ', payload: newQuiz });
        navigate('/');
    };

    return (
        <div className="create-quiz-container">
            <div className="cq-header">
                <button className="back-button" onClick={handleGoBack}>← Back</button>
                <h2>Create New Quiz</h2>
            </div>
            <form className="quiz-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="quiz-title">Quiz Title</label>
                    <input type="text" id="quiz-title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="quiz-description">Description</label>
                    <textarea id="quiz-description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <h3>Questions</h3>

                <AnimatePresence>
                {questions.map((q, qIndex) => (

                     <motion.div
                        key={q.id}
                        className="question-editor"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        layout
                    >
                    <div key={q.id} className="question-editor">
                        <div className="question-header">
                            <h4>Question {qIndex + 1}</h4>
                            <button
                                type="button"
                                className="remove-question-btn"
                                onClick={() => handleRemoveQuestion(qIndex)}
                                aria-label={`Remove question ${qIndex + 1}`}
                            >
                                <FaTrash />
                            </button>
                        </div>
                        <input
                            type="text"
                            value={q.text}
                            onChange={(e) => handleQuestionTextChange(qIndex, e.target.value)}
                            placeholder={`Enter question ${qIndex + 1}`}
                            className="question-text-input"
                            required
                        />
                        <div className="options-editor">
                            {q.options.map((opt, oIndex) => (
                                <div key={opt.id} className="option-input">
                                    <input
                                        type="radio"
                                        name={`correct_answer_${q.id}`}
                                        checked={q.correctAnswerId === opt.id}
                                        onChange={() => handleCorrectAnswerChange(qIndex, opt.id)}
                                        required
                                    />
                                    <input
                                        type="text"
                                        value={opt.text}
                                        onChange={(e) => handleOptionTextChange(qIndex, oIndex, e.target.value)}
                                        placeholder={`Option ${oIndex + 1}`}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                ))}

                </AnimatePresence>

                
                <button type="button" className="add-question-btn" onClick={handleAddQuestion}>
                    + Add Question
                </button>
                <button type="submit" className="save-quiz-btn">
                    Save Quiz
                </button>
            </form>
        </div>
    );
};

export default CreateQuizPage;