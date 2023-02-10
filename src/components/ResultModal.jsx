import { useSelector } from "react-redux";

import PlayerIconFilled from "./PlayerIcon";

const ResultModal = () => {
  const winner = useSelector((state) => state.gameSlice.winner);
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
          <button className="button bg__tertiary">quit</button>
          <button className="button bg__primary">next round</button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
