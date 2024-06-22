import { createContext, useReducer } from "react";

import { quizData } from "../data";

const initialState = {
  status: "welcome-state",
  quizData: null,
  currentIndex: 0,
  userAnswer: null,
  points: 0,
};

function gameReducer(state, action) {
  switch (action.type) {
    case "game/START_GAME":
      return { ...state, status: "start-game", quizData };

    case "game/USER_ANSWER":
      const currentQuestion = quizData[state.currentIndex];
      const isCorrect =
        currentQuestion.correctAnswer.toLowerCase() === action.payload.toLowerCase();

      return {
        ...state,
        userAnswer: action.payload,
        points: isCorrect ? currentQuestion.points + state.points : state.points,
      };

    case "game/NEXT_QUESTION":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        status: state.currentIndex >= quizData.length - 1 ? "end-game" : state.status,
        userAnswer: null,
      };

    case "game/END_GAME":
      return { ...state, status: "end-game" };

    case "game/RESET":
      return { ...initialState };

    default:
      return state;
  }
}

const GameContext = createContext();

function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return <GameContext.Provider value={{ ...state, dispatch }}>{children}</GameContext.Provider>;
}

export { GameContext };

export default GameContextProvider;
