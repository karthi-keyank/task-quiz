export const quizReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_QUIZZES':
      return {
        ...state,
        quizzes: action.payload,
      };

    case 'ADD_QUIZ': {
      const newQuizzes = [...state.quizzes, action.payload];
      return {
        ...state,
        quizzes: newQuizzes,
      };
    }

    case 'DELETE_QUIZ':
      return {
        ...state,
        quizzes: state.quizzes.filter(quiz => quiz.id !== action.payload),
      };

    default:
      return state;
  }
};