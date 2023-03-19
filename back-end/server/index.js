// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// // const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");

// const nodemailer = require("nodemailer");
// const { randomUUID } = require("crypto");
// const db = require("./db/db_conn");

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//   service: process.env.SERVICE,
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// // app.post("/api/student/forgot-password", async (req, res) => {
// //   const { email } = req.body;

// //   console.log(email);

// //   try {
// //     // Retrieve user from database
// //     const user = connection.query("SELECT * FROM student WHERE email = ?", [
// //       email,
// //     ]);
// //     console.log(user);

// //     if (!user) {
// //       return res.status(401).send("Invalid email address");
// //     }

// //     res.send("Email checked correctly!!!");
// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).send("Internal server error!!!");
// //   }
// // });

// // app.post("/api/forgot-password", async (req, res) => {
// //   const { email } = req.body;

// //   console.log("Line 58: " + email);

// //   const student = await connection.query(
// //     "SELECT * FROM student WHERE email = ?",
// //     [email]
// //   );

// //   console.log(student);
// //   // console.log(student.first_name);

// //   if (!student || student.length === 0) {
// //     return res
// //       .status(404)
// //       .json({ message: `Student not found with email: ${email}` });
// //   }

// //   const resetToken = randomUUID();
// //   console.log("Line 75: " + resetToken);
// //   const resetExp = new Date(Date.now() + 3600000);
// //   console.log("Line 77: " + resetExp);

// //   await connection.query(
// //     "UPDATE student SET reset_password_token = ?, reset_exp = ? WHERE email = ?",
// //     [resetToken, resetExp, email]
// //   );

// //   console.log("Line 84: " + email);

// //   const url = `http://localhost:3000/newPassword/${resetToken}`;

// //   console.log("Line 88: " + url);

// //   const mailOptions = {
// //     from: process.env.EMAIL_USERNAME,
// //     to: email,
// //     subject: "Reset Password",
// //     html: `<h4>Hello, ${email}</h4>
// //       <p>Click on the link to reset your password: ${url}.</p>`,
// //   };
// //   await transporter.sendMail(mailOptions);

// //   res.json({ message: "Password reset link has been sent to your email!!!" });
// // });

// // app.post("/api/reset-password", async (req, res) => {
// //   const { resetToken, newPassword } = req.body;

// //   console.log("Line 80: " + resetToken);
// //   console.log("Line 81: " + newPassword);

// //   const student = await connection.query(
// //     "SELECT * FROM student WHERE reset_password_token = ?",
// //     [resetToken]
// //   );

// //   console.log(student);
// //   console.log("this is student's email:" + student.email);

// //   if (!student || student.reset_exp < new Date()) {
// //     return res.status(400).json({ message: "Invalid or expired token" });
// //   }

// //   console.log("is the reset token expired: " + student.reset_exp);

// //   const enteredPassword = newPassword;
// //   console.log("Line 95: " + enteredPassword);
// //   const hashedPassword = await bcrypt.hash(enteredPassword, 10);
// //   console.log("Line 97: " + hashedPassword);

// //   await connection.query(
// //     "UPDATE student SET password = ?, reset_password_token = NULL, reset_exp = NULL WHERE email = ?",
// //     [hashedPassword, student.email]
// //   );

// //   console.log("Line 104:" + hashedPassword);
// //   console.log("Line 105: " + student.email);
// // });

// app.post("/api/student/update-password", async (req, res) => {
//   const { newPassword, email } = req.body;

//   console.log(newPassword);
//   console.log(email);

//   try {
//     // Retrieve user from database
//     const user = await getUserByEmail(email);
//     console.log(user);

//     if (!user) {
//       return res.status(401).send("Invalid email or password");
//     }

//     // Compare current password with hashed password in database
//     // const isMatch = await bcrypt.compare(newPassword, user.password);

//     // if (!isMatch) {
//     //   return res.status(401).send("Invalid email or password");
//     // }

//     // Hash and update new password in database
//     const enteredPassword = newPassword;
//     const hashedPassword = await bcrypt.hash(enteredPassword, 10);
//     console.log(hashedPassword);
//     await updatePasswordByEmail(email, hashedPassword);
//     console.log(updatePasswordByEmail);

//     // Send confirmation email
//     const mailOptions = {
//       from: process.env.EMAIL_USERNAME,
//       to: email,
//       subject: "Password updated successfully",
//       html: `<h4>Hello, ${user.first_name}</h4>
//         <p>Your password has been updated successfully.</p>`,
//     };
//     await transporter.sendMail(mailOptions);

//     res.send("Password updated successfully");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal server error");
//   }
// });

// const getUserByEmail = (email) => {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "SELECT * FROM student WHERE email = ?",
//       email,
//       (error, results) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(results[0]);
//         }
//       }
//     );
//   });
// };

// const updatePasswordByEmail = (email, password) => {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "UPDATE student SET password = ? WHERE email = ?",
//       [password, email],
//       (error, results) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(results);
//         }
//       }
//     );
//   });
// };

// app.listen(process.env.PORT, () => {
//   console.log("Server up and running on port: ", process.env.PORT);
// });

require("dotenv").config();
const mysql = require("mysql2");
const express = require("express");
const app = express();
const cors = require("cors");
const bp = require("body-parser");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { randomUUID } = require("crypto");

app.use(cors());
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

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

app.post("/api/student/forgot-password", async (req, res) => {
  const { email } = req.body;
  console.log(email);

  try {
    const user = await getUserByEmail(email);
    console.log(user);

    if (!user) {
      return res.status(401).send("Invalid email address. Try again!!!");
    }

    const resetToken = randomUUID();
    console.log("Line 75: " + resetToken);
    const resetExp = new Date(Date.now() + 3600000);
    console.log("Line 77: " + resetExp);

    db.query(
      "UPDATE student SET reset_password_token = ?, reset_exp = ? WHERE email = ?",
      [resetToken, resetExp, email]
    );

    console.log("Line 84: " + email);

    const url = `http://localhost:3000/newPassword/${resetToken}`;

    console.log("Line 88: " + url);

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Reset Password",
      html: `<h4>Hello, ${user.first_name}</h4>
      <p>You have requested to reset your password.</p>
      <p>Click the link below to change your password:</p>
      <p><a href=${url}>Reset password</a></p><br>
      <p>Ignore this email if you do remember your password, or you have not made the request.</p>`,
    };
    await transporter.sendMail(mailOptions);

    res.send("Email found. Email has been sent with reset link!!!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.post("/api/student/reset-password", async (req, res) => {
  const { resetToken, newPassword } = req.body;
  console.log(resetToken);
  console.log(newPassword);

  try {
    const user = await getUserByResetToken(resetToken);
    console.log(user);

    if (!user) {
      return res.status(401).send("Invalid token. No user with that token!!!");
    }

    if (!user || user.reset_exp < new Date()) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }
    console.log(user.reset_exp);

    const enteredPassword = newPassword;
    console.log("Line 95: " + enteredPassword);
    const hashedPassword = await bcrypt.hash(enteredPassword, 10);
    console.log("Line 97: " + hashedPassword);

    db.query(
      "UPDATE student SET password = ?, reset_password_token = NULL, reset_exp = NULL WHERE email = ?",
      [hashedPassword, user.email]
    );

    console.log("Line 104:" + hashedPassword);
    console.log("Line 105: " + user.email);

    res.send("Password updated successfully!!!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Yo bro - Internal server error");
  }
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
      <p>You have requested to reset your password.</p>
      <p>Click the link below to change your password:</p>
      <p><a href=${url}>Reset password</a></p><br>
      <p>Ignore this email if you do remember your password, or you have not made the request.</p>`,
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

const getUserByResetToken = (resetToken) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM student WHERE reset_password_token = ?",
      resetToken,
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

app.listen(process.env.PORT, () => {
  console.log("Server up and running on port: ", process.env.PORT);
});
