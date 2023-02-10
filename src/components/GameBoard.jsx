import GameTile from "./GameTile";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../store/gameSlice";

const GameBoard = () => {
  const currentState = useSelector((state) => state.gameSlice.currentState);
  const currentWinner = useSelector((state) => state.gameSlice.winner);
  const currentPlayer = useSelector((state) => state.gameSlice.currentPlayer);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(actions.setGameBit(index));
  };

  return (
    <div className="game-board">
      {currentState.map((item, index) => (
        <GameTile
          value={item}
          handleClick={() => handleClick(index)}
          key={index}
        />
      ))}
    </div>
  );
};
export default GameBoard;
