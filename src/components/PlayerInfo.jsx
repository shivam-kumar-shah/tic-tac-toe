import { useSelector } from "react-redux";

import PlayerIconFilled from "./PlayerIcon";

const PlayerInfo = () => {
  const player = useSelector((state) => state.gameSlice.currentPlayer);
  return (
    <div className="hud--header__player-info">
      <PlayerIconFilled player={player} />
      turn
    </div>
  );
};

export default PlayerInfo;
