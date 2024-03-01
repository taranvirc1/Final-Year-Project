import React from 'react';
import './Pop.css';

const Pop =({ onClose }) => {
    return(
        <div className="pop-up">
            <p>Your form has been successfully submitted!</p>
            <button onClick={onClose}>Close</button>
        </div>

    );
};

export default Pop;