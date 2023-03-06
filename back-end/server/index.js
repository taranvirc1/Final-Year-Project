require("dotenv").config();
const mysql = require("mysql2");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/api/student/update-password", async (req, res) => {
  const { newPassword, email } = req.body;

  try {
    // Retrieve user from database
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).send("Invalid email or password");
    }

    // Compare current password with hashed password in database
    // const isMatch = await bcrypt.compare(newPassword, user.password);

    // if (!isMatch) {
    //   return res.status(401).send("Invalid email or password");
    // }

    // Hash and update new password in database
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await updatePasswordByEmail(email, hashedPassword);

    // Send confirmation email
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Password updated successfully",
      html: `<h4>Hello, ${user.first_name}</h4>
        <p>Your password has been updated successfully.</p>`,
    };
    await transporter.sendMail(mailOptions);

    res.send("Password updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM student WHERE email = ?",
      email,
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      }
    );
  });
};

const updatePasswordByEmail = (email, password) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE student SET password = ? WHERE email = ?",
      [password, email],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

app.listen(process.env.PORT, () => {
  console.log("Server up and running on port: ", process.env.PORT);
});
