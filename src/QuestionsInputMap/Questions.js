import { QuestionsInputMap } from "./QuestionsInputMap";
import { useRef } from "react";

const Questions = (props) => {

    let count = 0; 

    const AnswerRef = useRef(null);
    const AudioRef = useRef();

    let D = QuestionsInputMap;

    let Z = D.sort((a, b) => 0.5 - Math.random());

    let Y = Z[0]; 

    const QuestionClicked = (event) => {
        
        if (event.target.value === AnswerRef.current.value) {
            Z.shift();
            props.questionRight();
        
        }

        else {
            Z.shift();
            props.questionWrong();

        }
       
    }
    const clickSoundPlay = () => {

        AudioRef.current.play();
        AudioRef.current.Time=0;
    
      }
    
      const clickSoundPause = () => {
        AudioRef.current.pause();
    
      }
    const renderQuestions = () => {

        if (count === null || count === undefined || count.length === 0);

        else {

            return (
    
                <>
                  
                    <ul className="quizButtonsList">
                        <div className="questionTitle">
                        <h2 className="quizQuestion">{Y.question}</h2>
                        </div>
                        <div className="buttonsContainer">
                        <button onMouseEnter={clickSoundPlay} className="quizButtons" value={Y.choice1} onClick={QuestionClicked}>{Y.choice1}</button>
                        <button onMouseEnter={clickSoundPlay} onMouseLeave={clickSoundPause} className="quizButtons" value={Y.choice2} onClick={QuestionClicked}>{Y.choice2}</button>
                        <button onMouseEnter={clickSoundPlay} onMouseLeave={clickSoundPause} className="quizButtons" value={Y.choice3} onClick={QuestionClicked}>{Y.choice3}</button>
                        <button onMouseEnter={clickSoundPlay} onMouseLeave={clickSoundPause} className="quizButtons" value={Y.choice4} onClick={QuestionClicked}>{Y.choice4}</button>
                        <button className="quizAnswerButton" ref={AnswerRef} value={Y.answer} onClick={QuestionClicked}>{Y.answer}</button>
                        </div>
                       
                    </ul>
                    
                </>
            )
        }
       
    }

    return (
    
    <>
        {renderQuestions()}
        <audio ref={AudioRef} src="./Assets/audio/beep.mp3" ></audio>
    </>
        
)
    
}

export default Questions;