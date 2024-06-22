import { useContext } from "react";
import { GameContext } from "../contexts/GameContext.jsx";

export function useGame() {
  const contexts = useContext(GameContext);

  if (!contexts) {
    throw new Error("Make sure to use the context within the GameContextProvider");
  }

  return contexts;
}
