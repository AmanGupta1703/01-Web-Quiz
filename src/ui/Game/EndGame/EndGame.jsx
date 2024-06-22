import { useGame } from "../../../hooks/useGame";
import "./endGame.css";

function getEmoji(score) {
  if (score >= 45) {
    return { emoji: "😃", text: "You're an Anime Master!" };
  } else if (score >= 30) {
    return { emoji: "😊", text: "Nice! Almost there!" };
  } else if (score >= 15) {
    return { emoji: "😐", text: "Not bad, keep trying!" };
  } else {
    return { emoji: "😢", text: "Oh no, better luck next time!" };
  }
}

function EndGame() {
  const { points, dispatch } = useGame();

  const { emoji, text } = getEmoji(points);

  function handleReset() {
    dispatch({ type: "game/RESET" });
  }

  return (
    <main className="main">
      <section className="section section--end-game">
        <article className="score-box">
          <h1 className="score">
            Your Score: <span className="score__points">{points}</span>
            <span className="score__text">
              {text} {emoji}
            </span>
          </h1>

          <button onClick={handleReset} className="btn btn--reset">
            Reset
          </button>
        </article>
      </section>
    </main>
  );
}

export default EndGame;
