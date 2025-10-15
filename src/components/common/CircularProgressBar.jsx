import React from 'react';
import PropTypes from 'prop-types';
import './CircularProgressBar.css'; 

const CircularProgressBar = ({ score, total }) => {
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    const radius = 50;
    const strokeWidth = 10;
    const size = (radius + strokeWidth) * 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="progress-circle-container">
            <svg className="progress-circle-svg" width={size} height={size}>
             
                <circle
                    className="progress-circle-bg"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
               
                <circle
                    className="progress-circle-fg"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
           
                <text x="50%" y="50%" className="progress-circle-text">
                    {`${percentage}%`}
                </text>
            </svg>
        </div>
    );
};

CircularProgressBar.propTypes = {
    score: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};

export default CircularProgressBar;