import React from 'react';
import './PopR.css';

const PopR =({ onClose }) => {
    return(
        <div className="pop-up">
            <p>Your account has been successfully created!</p>
            <button onClick={onClose}>Close</button>
        </div>

    );
};

export default PopR;