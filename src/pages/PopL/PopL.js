import React from 'react';
import './PopL.css';

const PopL =({ onClose }) => {
    return(
        <div className="pop-up">
            <p>You have successfully logged in!</p>
            <button onClick={onClose}>Close</button>
        </div>

    );
};

export default PopL;