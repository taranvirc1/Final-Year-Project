require("dotenv").config();
const mysql = require("mysql2/promise");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const nodemailer = require("nodemailer");
const { randomUUID } = require("crypto");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
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

app.post("/api/forgot-password", async (req, res) => {
  const { email } = req.body;

  console.log(email);

  const student = await db.query("SELECT * FROM student WHERE email = ?", [
    email,
  ]);

  console.log(student);

  if (!student) {
    return res
      .status(404)
      .json({ message: `Student not found with email: ${email}` });
  }

  const resetToken = randomUUID();
  console.log(resetToken);
  const resetExp = new Date(Date.now() + 3600000);
  console.log(resetExp);

  await db.query(
    "UPDATE student SET reset_password_token = ?, reset_exp = ? WHERE student_id = ?",
    [resetToken, resetExp, student.student_Id]
  );

  const url = `http://localhost:3000/reset-password?token=${resetToken}`;

  console.log(url);

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Reset Password",
    html: `<h4>Hello, ${student.first_name}</h4>
      <p>Click on the link to reset your password: ${url}.</p>`,
  };
  await transporter.sendMail(mailOptions);

  res.json({ message: "Password reset link has been sent to your email!!!" });
});

app.post("/api/student/update-password", async (req, res) => {
  const { newPassword, email } = req.body;

  try {
    // Retrieve user from database
    const user = await getUserByEmail(email);
    console.log(user);

    if (!user) {
      return res.status(401).send("Invalid email or password");
    }

    // Compare current password with hashed password in database
    // const isMatch = await bcrypt.compare(newPassword, user.password);

    // if (!isMatch) {
    //   return res.status(401).send("Invalid email or password");
    // }

    // Hash and update new password in database
    const enteredPassword = newPassword;
    const hashedPassword = await bcrypt.hash(enteredPassword, 10);
    console.log(hashedPassword);
    await updatePasswordByEmail(email, hashedPassword);
    console.log(updatePasswordByEmail);

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
