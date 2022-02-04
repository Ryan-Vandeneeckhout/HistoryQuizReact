import { QuestionsInputMap } from "../QuestionsInputMap/QuestionsInputMap";
import "./QuizPage.css";
import { useState, useRef } from "react";
import Questions from "../QuestionsInputMap/Questions";
import PlayerScoreBoard from "./PlayerScoreBoard";

const QuizPage = (props) => {
  const [count, setCount] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [right, setRight] = useState(0);
  const AudioWrongRef = useRef();
  const AudioRightRef = useRef();
  const AudioThemeRef = useRef();

  let play = 0;
  console.log(props.userInput); 
  const [questionsFixed, setQuestionsFixed] = useState(false);
  let QuestionsMap =
    QuestionsInputMap[Math.floor(Math.random() * QuestionsInputMap.length)];
  const ThemePlayMusic = () => {
    if (play === 0) {
      AudioThemeRef.current.play();
      play++;
    } else {
      AudioThemeRef.current.pause();
      play--;
    }
  };
  const renderQuestions = () => {
    if (
      questionsFixed === false ||
      questionsFixed === undefined ||
      questionsFixed.length === 0 ||
      questionsFixed === null
    ) {
      setQuestionsFixed(true);
    } else if (count === 5) {
      return <PlayerScoreBoard userInput={props.userInput} right={right} />;
    } else {
      return (
        <>
          <Questions
            questionWrong={questionWrong}
            questionRight={questionRight}
            QuestionsMap={QuestionsMap}
          />
          <div className="bottomOfQuizPage">
            <div className="scorebox">
              <h3>Current Score {right}/18</h3>
            </div>
            <div onClick={ThemePlayMusic} className="themeSongBox">
              <h3>Click to Play Theme Song!</h3>
            </div>
            <div className="currentQuestion">
              <h3>Current Question {count}/18</h3>
            </div>
          </div>
        </>
      );
    }
  };

  const questionRight = () => {
    setTimeout(() => {
      setCount(count + 1);
      setRight(right + 1);
      console.log(right);
    }, 2000);

    rightAnswerSound();
  };

  const rightAnswerSound = () => {
    AudioRightRef.current.play();
    AudioRightRef.current.Time = 0;
  };

  const wrongAnswerSound = () => {
    AudioWrongRef.current.play();
    AudioWrongRef.current.Time = 0;
  };

  const questionWrong = () => {
    setTimeout(() => {
      setCount(count + 1);
      setWrong(wrong + 1);
    }, 2000);

    wrongAnswerSound();
  };

  return (
    <section className="quiz">
      <div className="quiz-Wrapper">
        <div className="quizQuestionContainer">{renderQuestions()}</div>
      </div>
      <audio ref={AudioWrongRef} src="./Assets/audio/wrong.wav"></audio>
      <audio ref={AudioRightRef} src="./Assets/audio/right.wav"></audio>
      <audio ref={AudioThemeRef} src="./Assets/audio/medieval.mp3"></audio>
    </section>
  );
};
export default QuizPage;
