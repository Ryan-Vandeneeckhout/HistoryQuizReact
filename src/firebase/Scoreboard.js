import { useEffect, useState } from 'react';
import firebase from './Firebase';
import { getDatabase, onValue, ref } from 'firebase/database';
import "./ScoreBoard.css"; 


const ScoreBoard = () => {

    const database = getDatabase(firebase);
    const [scoresFirebase, setScoresFirebase] = useState([]);

    useEffect(() => {
      // Call to Firebase RealTime DB 
        const dbRootAddress = ref(database, `Scores/Users/`);
          onValue(
            dbRootAddress,
            (response) => {
              if (response.val() === null) {
                setScoresFirebase([]);
              } else {
                setScoresFirebase(response.val());
              }
            },
            []
          );
        }, [database]);
        
    
    const renderMap = () => {
      if (
              //Firebase Error HAndling 
                scoresFirebase === null ||
                scoresFirebase === undefined ||
                scoresFirebase === "" ||
                scoresFirebase.length === 0
            ) {
              return (
                <h2 className='TripsActivitiesNull'>Something Went Wrong, Score List is Empty!</h2>
              )
            }
        
            else {


              return (
                  
                /* Firebase Map */
                  
                <ul className="dataBaseResultsList">
                  <h2>Quiz Global ScoreBoard</h2>
                      
                    {/* Maps over node and renders one city object with children */}
                      
                  {Object.keys(scoresFirebase).map((key, index) => (
                    <li id={`${key}`} key={index}>
                      <h3>Name: {scoresFirebase[`${key}`].name} || <span> Score: {scoresFirebase[`${key}`].score} </span></h3>
                    </li>
                  ))}
                </ul>
              );
            }
          };
    return (
      <>   
        {/* Inital Render for Scoreboard Component*/}
          <section className='globalScoreBoard'>
            {renderMap()}
        </section>
      </>
       
)
}

export default ScoreBoard; 