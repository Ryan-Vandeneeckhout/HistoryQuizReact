import { getDatabase, set, ref } from 'firebase/database';

const PlayerScoreBoard = (props) => {
  const renderSaying = () => {
    if (props.right > 0) {
      return (
        <div className="redH2">
          <h2 className="redH2Quiz">Nice Try... NOT! LOLOLOLOL</h2>
        </div>
      );
    }

    if (props.right > 4) {
      return (
        <div className="redH2">
          <h2 className="redH2Quiz">
            Hope You Are Doing Better in the Sciences!
          </h2>
        </div>
      );
    }

    if (props.right > 11) {
      return (
        <div className="redH2">
          <h2 className="redH2Quiz">Not Bad but Could Be Better</h2>
        </div>
      );
    }

    if (props.right > 15) {
      return (
        <div className="redH2">
          <h2 className="redH2Quiz">You are a History Nerd!</h2>
        </div>
      );
    }

    if (props.right > 17) {
      return (
        <div className="redH2">
          <h2 className="redH2Quiz">Go Outside, Get Some Sun!</h2>
        </div>
      );
    }
    };
    
    const addScore = (event) => {
        event.preventDefault();
        const db = getDatabase();
        
        //Sets city on firebase based on user click.
        set(ref(db, `Scores/Users/Bob`), {
            name: "Bob", score: props.right
        });

    }

    return (
    
    <>
    <div className="playerScoreBoardContainer">
      <div className="redH2">
        <h2>You Completed the British History Quiz</h2>
      </div>
      <div className="blueH2">
        <h2>Quiz Score {props.right}/18</h2>
      </div>

      {renderSaying()}
      </div>
      <button onClick={addScore}>Add Your Score to the LeaderBoard?</button>
      </>
  );
};
export default PlayerScoreBoard;
