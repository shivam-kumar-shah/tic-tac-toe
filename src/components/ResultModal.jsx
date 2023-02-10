import { useDispatch, useSelector } from "react-redux";

import { actions } from "../store/playerSlice";
import PlayerIconFilled from "./PlayerIcon";

const ResultModal = () => {
  const winner = useSelector((state) => state.gameSlice.winner);
  const currentPlayer = useSelector((state) => state.playerSlice.player);
  const dispatch = useDispatch();
  const className = winner === -1 ? `modal` : `modal visible`;

  return (
    <div className={className}>
      <div className="modal--banner">
        <div className="modal--banner__header">player {winner} wins!</div>
        <div className="modal--banner__title">
          <PlayerIconFilled player={winner} />
          takes the round
        </div>
        <div className="modal--banner__footer">
          <button className="button tertiary">quit</button>
          <button className="button primary">next round</button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
