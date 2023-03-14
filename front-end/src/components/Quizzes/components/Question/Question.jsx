import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Question.css";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import axios from "axios";

const Question = ({
  currQues,
  setCurrQues,

  options,
  correct,
  setScore,
  score,

}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const Navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      Navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  const [questions, setQuestions] = useState([]);

const difficulty  = "easy";
const category = "Java";
  const jwt = localStorage.getItem("jwt");

  
  useEffect(() => {
    axios
      .get(`http://localhost:8080/difficulty/${"easy"}/${"Java"}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((response) => {
        setQuestions(response.data);
      //  setQuizLength(response.data.length);
      })
      .catch((error) => {
        console.error(error);
        alert("cant get quiz");
      });
  }, []);

console.log(questions);

  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Question;
