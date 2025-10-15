import React, { createContext, useContext, useReducer, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { quizReducer } from './quizReducer';


const QuizContext = createContext();

const initialState = {
    quizzes: [],
};

export const QuizProvider = ({ children }) => {
    const [state, dispatch] = useReducer(quizReducer, initialState);

    useEffect(() => {
        const savedQuizzes = localStorage.getItem('quizzes');
     
        const quizzesToLoad = savedQuizzes ? JSON.parse(savedQuizzes) : [];
        
        dispatch({ type: 'LOAD_QUIZZES', payload: quizzesToLoad });

    }, []);


    useEffect(() => {

        if (state.quizzes && state.quizzes.length > 0) {
            localStorage.setItem('quizzes', JSON.stringify(state.quizzes));
        } else {
     
            localStorage.removeItem('quizzes');
        }
    }, [state.quizzes]);

    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
};

QuizProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useQuiz = () => {
    return useContext(QuizContext);
};