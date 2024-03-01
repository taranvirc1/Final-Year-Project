const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bcrypt=require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const db = require('./db');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email@gmail.com',
        pass: 'email-password',
    },
});

app.post('/login', (req,res) => {
    const {username, password} = req.body;

    const selectQuery = 'SELECT * FROM users WHERE username = ?';
    db.query(selectQuery, [username], (err, results) => {
        if(err) {
            console.error('User login failed:', error);
            return res.status(500).send('Internal Server Error');
        }

        if (results.length === 0) {
            return res.status(401).send('Invalid username or password');
        }

        const hashedPassword = results[0].password;

        bcrypt.compare(password, hashedPassword, (err, result) => {
            if(err) {
                console.error('Password comparison failed:', err);
                return res.status(500).send('Internal Server Error');
            }

            if(result) {
                res.status(200).send('Login successful');
            }else{
                res.status(401).send('Invalid username or password');
            }
        });
    });
});

app.post('/register', (req,res) => {
    const { username, password, selectedOption } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error('Password hashing failed:', err);
            return res.status(500).send('Internal Server Error');
        }

        const insertQuery = 'INSERT INTO users (username, password, selectedOption) VALUES(?, ?)';
        db.query(insertQuery, [username, hash], (err) => {
            if(err){
                console.error('User registration failed:', err);
                return res.status(500).send('Internal Server Error');
            }
            res.status(201).send('User registered successfully');
        });
    });
});

app.post('/submit-form', (req, res) => {
    const { firstName, surname, phoneNumber, selectedOption } = req.body;

    const insertFormQuery = 'INSERT INTO form-data (first-name, surname, phone-number, selected_option) VALUES (?, ?)';
    db.query(insertFormQuery, [firstName, surname, phoneNumber, selectedOption], (err, results) => {
        if (err) {
          console.error('Form submission failed:', err);
          return res.status(500).send('Internal Server Error');
        }
        const mailOptions = {
            from: 'your_email@gmail.com', 
            to: 'recipient_email@example.com', 
            subject: 'Form Submission',
            text: `First Name: ${firstName}\nSurname: ${surname}\nPhone Number: ${phoneNumber}\nSelected Option: ${selectedOption}`,
          };
      
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error('Email sending failed:', error);
              return res.status(500).send('Internal Server Error');
            }
            console.log('Email sent:', info.response);
            res.status(201).send('Form submitted successfully');
          });
        });
      });
      

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});