import { useGame } from "../../../hooks/useGame";
import { ProgressBar } from "../../";
import "./quiz.css";

function Quiz() {
  const { quizData, currentIndex, userAnswer, dispatch } = useGame();

  const { question, options } = quizData[currentIndex];

  function handleOptionClick(name) {
    if (!name) {
      return;
    }

    dispatch({ type: "game/USER_ANSWER", payload: name });
  }

  function handleNextQuestion() {
    if (!userAnswer) {
      return;
    }

    dispatch({ type: "game/NEXT_QUESTION" });
  }

  return (
    <main className="main">
      <section className="section section--quiz">
        <article className="quiz">
          <h1 className="quiz__title">{question}</h1>

          <ProgressBar />

          <div className="options">
            {options.map((option, index) => (
              <Option
                key={option}
                index={index}
                option={option}
                onOptionClick={handleOptionClick}
              />
            ))}
          </div>

          <div className="button-container">
            {userAnswer && (
              <button className="btn btn--next" onClick={handleNextQuestion}>
                Next
              </button>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}

function Option({ option, index, onOptionClick }) {
  const { userAnswer } = useGame();

  const isClicked = userAnswer === option;

  return (
    <button
      onClick={() => onOptionClick(option)}
      id={index}
      key={option}
      className={`btn btn--option ${isClicked ? "btn--option--active" : null}`}
      disabled={userAnswer ? true : false}
    >
      {option}
    </button>
  );
}

export default Quiz;
