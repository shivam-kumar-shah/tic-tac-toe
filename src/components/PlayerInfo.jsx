import { useSelector } from "react-redux";

import PlayerIconFilled from "./PlayerIcon";

const PlayerInfo = () => {
  const player = useSelector((state) => state.playerSlice.player);

  return (
    <div className="hud--header__player-info">
      <PlayerIconFilled player={player} />
    </div>
  );
};

export default PlayerInfo;
