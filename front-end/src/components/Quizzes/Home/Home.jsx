import { Button, MenuItem, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Categories from "../Data/Categories";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Swal from "sweetalert2";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const [loggedInUser, setLoggedinUser] = useState("");
  const Navigate = useNavigate();

  const fireAlert = (message, icon, navigate) => {
    Swal.fire({
      container: "swal2-container",
      title: message,
      icon: icon,
    }).then((result) => {
      if (navigate) {
        if (result.isConfirmed) {
          Navigate("/account");
        }
      }
    });
  };

  useEffect(() => {
    const saveLoggedinUser = localStorage.getItem("loggedInUser");
    if (saveLoggedinUser) {
      setLoggedinUser(saveLoggedinUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("category", category);
    localStorage.setItem("difficulty", difficulty);
  });

  const handleSubmit = () => {
    if (!loggedInUser) {
      fireAlert("make sure you log in to start the Quiz!", "error", "true");
    } else {
      // Check only category and difficulty, ignore name
      if (!category || !difficulty) {
        setError(true);
        return;
      } else {
        setError(false);
        fetchQuestions(category, difficulty);
        Navigate("/testQuiz");
      }
    }
  };
  // testc
  return (
    <>
      <Header />
      <div className="content">
        <div className="settings">
          <span className="QuizSetting">Quiz Settings</span>
          <div className="settings__select">
            {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}

            <TextField
              select
              label="Select Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30 }}
            >
              {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Select Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30 }}
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Start Quiz
            </Button>
          </div>
        </div>
        <img src="/quiz.png" className="banner" alt="quiz app" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
