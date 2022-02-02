import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {

  return (
    <section className="homePage">
      <div className="wrapper-HomePage">
        <div className="homePageContainer">
          <div className="homePageContent">
            <div className="homePageTitleContainer">
              <h2>Welcome to the British History Quiz!</h2>
            </div>
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
