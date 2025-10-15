import PropTypes from "prop-types";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useQuiz } from "../../state/quizContext";
import { useNavigate } from "react-router-dom";
import "./QuizCard.css"
function QuizCard({ id, title, description, questionCount }) {
  const navigate = useNavigate();
  const { dispatch } = useQuiz();

  const handlerCardClick = () => {
    navigate(`/quiz/run/${id}`);
  };

  const handleDelete = (e) => {
  
    e.stopPropagation();

    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      dispatch({ type: "DELETE_QUIZ", payload: id });
    }
  };

  return (
    <div
      className="quiz-card"
      onClick={handlerCardClick}
      role="button"
      tabIndex={0}
    >
      <div className="quiz-card-inner">
        <h3 className="quiz-card-title">{title}</h3>
        <p className="quiz-card-description">{description}</p>
        <p className="quiz-count">{questionCount} Questions</p>
      </div>

      <button className="delete-btn" onClick={handleDelete} aria-label={`Delete quiz ${title}`}>
        <FaTrash />
      </button>
    </div>
  );
}

QuizCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  questionCount: PropTypes.number.isRequired,
};

QuizCard.defaultProps = {
  description: "",
};

export default QuizCard;