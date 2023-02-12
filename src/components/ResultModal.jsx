import { useDispatch, useSelector } from "react-redux";

import { actions as gameActions } from "../store/gameSlice";
import PlayerIconFilled from "./PlayerIcon";

const ResultModal = () => {
  const winner = useSelector((state) => state.gameSlice.winner);
  const dispatch = useDispatch();
  const className = winner === -1 ? `modal` : `modal visible`;
  const modalBannerClasses =
    winner === -1 ? `modal--banner` : `modal--banner scale`;

  return (
    <div className={className}>
      <div className={modalBannerClasses}>
        <div className="modal--banner__header">player {winner} wins!</div>
        <div className="modal--banner__title">
          <PlayerIconFilled player={winner} />
          takes the round
        </div>
        <div className="modal--banner__footer">
          <button
            className="button tertiary"
            onClick={() => {
              dispatch(gameActions.resetHistory());
              dispatch(gameActions.resetState());
            }}
          >
            quit
          </button>
          <button
            className="button primary"
            onClick={() => {
              dispatch(gameActions.resetState());
            }}
          >
            next round
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
