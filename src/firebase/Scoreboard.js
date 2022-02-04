import { useEffect, useState } from 'react';
import firebase from './Firebase';
import { getDatabase, onValue, ref } from 'firebase/database';
import "./ScoreBoard.css"; 


const ScoreBoard = () => {

    const database = getDatabase(firebase);
    const [scoresFirebase, setScoresFirebase] = useState([]);

    useEffect(() => {
      
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
                scoresFirebase === null ||
                scoresFirebase === undefined ||
                scoresFirebase === "" ||
                scoresFirebase.length === 0
            ) {
              return (
                <h2 className='TripsActivitiesNull'>Trips List is Empty, Add Some Activities!</h2>
              )
            }
        
            else {


              return (
                  
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
            <section className='globalScoreBoard'>
                {renderMap()}
            </section>
        </>
       
)
}

export default ScoreBoard; 