import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Header.css"

function Header() {
    const navigate = useNavigate();

    return(
        <div className="header">
            <h2 className="quiz-heading">Quiz</h2>
            <button className="plus-button" onClick={() => navigate('/create')}>
                <FaPlus />
            </button>      
        </div>
    );
}

export default Header;