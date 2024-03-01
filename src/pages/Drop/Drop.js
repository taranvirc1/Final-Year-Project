/*import React, {useState} from 'react';
import './Drop.css';

const Drop = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    }

    return(
        <div className="drop-container">
            <label htmlFor="dropOptions">Select an Option:</label>
            <select
            id="dropOptions"
            name="dropOptions"
            value={selectedOption}
            onChange={handleSelectChange}
            >
                <option value="">Select...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>

            {selectedOption && (
                <p> You selected : {selectedOption}</p>
            )}
        </div>
    );

};

export default Drop;*/