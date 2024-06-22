import { useGame } from "../../../hooks/useGame";
import "./welcomeScreen.css";

function WelcomeScreen() {
  const { dispatch } = useGame();

  function handleClick() {
    dispatch({ type: "game/START_GAME" });
  }

  return (
    <main className="main">
      <section className="section section--welcome">
        <div className="section__content">
          <h1 className="section--welcome__title">React Based Quiz App</h1>
          <h2 className="section--welcome__subtitle">Anime Quiz</h2>
          <button onClick={handleClick} className="btn btn--start-quiz">
            Start
          </button>
        </div>
      </section>
    </main>
  );
}

export default WelcomeScreen;
