import "./game.css";
import { EndGame, Quiz, WelcomeScreen } from "./../";

import { useGame } from "./../../hooks/useGame";

function Game() {
  const { status } = useGame();

  return (
    <>
      {status === "welcome-state" && <WelcomeScreen />}
      {status === "start-game" && <Quiz />}
      {status === "end-game" && <EndGame />}
    </>
  );
}

export default Game;
