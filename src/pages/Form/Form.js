import React, {useState} from 'react';
//import Menu from '../Menu/Menu.js';
//import Drop from '../Drop/Drop.js';
import axios from 'axios';
import Pop from '../Pop/Pop.js';
import './Form.css';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [showPop, setShowPop] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleSurname = (e) => {
        setSurname(e.target.value);
    }

    const handlePhoneChange = (e) => {
        const formattedPhoneNumber = e.target.value;
        setPhoneNumber(formattedPhoneNumber)
    };
    

    /*const handleSelectChange = (option) => {
        setSelectedOption(option);
    };*/

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert('Please fill out all required fields');
            return;
        }

        if (!validatePhoneNumber(phoneNumber)) {
            alert(`Invalid phone number: ${phoneNumber}`);
            return;
        }

        if(!validateName(firstName)) {
            alert('Please provide a valid first name');
            return;
        }

        if(!validateName(surname)) {
            alert('Please provide a valid surname');
            return;
        }

        if(!selectedOption) {
            alert('Please select an option');
            return;
        }

        setShowPop(true);

        try{
            const response = await axios.post('http://localhost:8080/api/forms/submit',{
                firstName:firstName,
                surname:surname,
                phoneNumber:phoneNumber,
                selectedOption:selectedOption,
            });

            console.log('Server response:', response.data);
            console.log('First Name entered:', firstName);
            console.log('Surname entered:', surname);
            console.log('Phone Number submitted:', phoneNumber);
            console.log('Selected Option:', selectedOption);


        } catch(error){
            console.error(error);
        }
    }
    
        //logictobeadded


    const handleClosePop = () => {
        setShowPop(false);
    }

    const validateForm = () => {
        return firstName !=='' && surname !=='' && phoneNumber !=='' && selectedOption !=='';
    };

    const validatePhoneNumber = (phoneNumber) => {
        return /^\d{11}$/.test(phoneNumber);
    }

    const validateName = (name) => {
        return /^[a-zA-Z]+$/i.test(name);
    };

    return (
        <div>
        <form className="your-form" onSubmit={handleSubmit}>
            <div>
                <label>
                    Please enter your first name:
                    <input 
                    type="text"
                    value={firstName}
                    onChange={handleFirstName}
                    />
                </label>
            </div>
            <div>
                <label>
                    Please enter your surname:
                    <input 
                    type="text"
                    value={surname}
                    onChange={handleSurname}
                    />
                </label>
            </div>
            <div className="menu-container">
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={handlePhoneChange}
      />
    </div>
    <div className="drop-container">
            <label htmlFor="dropOptions">Select an Option:</label>
            <select
            id="dropOptions"
            name="dropOptions"
            value={selectedOption}
            onChange={handleSelectChange}
            >
                <option value="">Select...</option>
                <option value="GP">GP</option>
                <option value="GPP">GPP</option>
                <option value="GPPP">GPPP</option>
            </select>

            {selectedOption && (
                <p> You selected : {selectedOption}</p>
            )}
        </div>

        <div className="submit-button-container">
        <button type="submit">Submit</button>
        </div>
        </form>

        {showPop && (
            <Pop onClose={handleClosePop} />
        ) }
        </div>

    );
        };


export default Form;