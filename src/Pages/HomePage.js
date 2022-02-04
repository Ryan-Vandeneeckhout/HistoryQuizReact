import { Link } from "react-router-dom";
import "./HomePage.css";


const HomePage = (props) => {
  const handleSubmit = (e) => {

    e.preventDefault()
  }


  const handleInputChange = (event) => {
    event.preventDefault();
    props.setUserInput(event.target.value);
  };

  return (
    <section className="homePage">
      <div className="wrapper-HomePage">
        <div className="homePageContainer">
          <div className="homePageContent">
            <div className="homePageTitleContainer">
              <h2>Welcome to the British History Quiz!</h2>
            </div>
            <form onSubmit={handleSubmit} className='searchPageFormApi'>
          <label htmlFor="newTrip" aria-label="Add A UserName"></label>
          <input placeholder="Add A UserName" type="text" id="newTrip" value={props.userInput} onChange={handleInputChange} />
        </form >
            <h3>Click the Button Below to Start the Quiz!</h3>
            <Link to="/QuizPage">
              <button >Start Quiz</button>
            </Link>
          </div>
        </div>
          </div>
       
    </section>
  );
};
export default HomePage;
