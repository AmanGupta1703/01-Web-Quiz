import { useGame } from "../../../hooks/useGame";
import "./progressBar.css";

function ProgressBar() {
  const { quizData, currentIndex } = useGame();

  const totalQuestions = quizData?.length;

  const progressPercentage = Math.floor((currentIndex / totalQuestions) * 100);

  return (
    <div className="progress">
      <div className="progress__bar" style={{ width: `${progressPercentage}%` }}></div>
    </div>
  );
}

export default ProgressBar;
