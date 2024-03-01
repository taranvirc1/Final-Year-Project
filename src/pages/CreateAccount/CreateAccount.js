import React, {useState} from 'react';
import{useNavigate} from 'react-router-dom';
import axios from 'axios';
//import Drop from '../Drop/Drop.js';
import Form from '../Form/Form.js';
import './CreateAccount.css';

const CreateAccount = () => {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const options = [
        {value:'GP', label: 'GP'},
        {value:'GPP', label: 'GPP'},
        {value:'GPPP', label: 'GPPP'},

    ]

    
    const handleCreateAccount = async () => {
        try{
            const response = await axios.post('http://localhost:8080/api/users/register', {
                username: newUsername,
                password: newPassword,
                selectedOption: selectedOption,
            });
            const responseData = response.data;
            console.log(responseData);
        } catch(error){
            console.error(error.message);
        }

       
    setLoggedIn(true);
    };

    return(
        <div>
            <br />
            <form className="account-form">
            <h2>Create Account</h2>
            <form>
                <div>
                <label className="label">
                    New Username:
                    <input 
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    />
                </label>
                </div>
                <br />
                <div>
                <label className="label">
                    New Password:
                    <input 
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    />
                </label>
                </div>
                <br />
            <div className="drop-container">
            <label htmlFor="dropOptions">Select an Option:</label>
            <select
            id="dropOptions"
            name="dropOptions"
            value={selectedOption}
            onChange={handleSelectChange}
            >
               <option value="">Select...</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
                <p> You selected : {selectedOption}</p>
            
        </div>
               
                <button type="button" onClick={handleCreateAccount}>
                    Create Account
                </button>
            </form>

            <br />
            </form>
            <br />
            <br />
            <br />
            
        </div>

    );
            };


export default CreateAccount;