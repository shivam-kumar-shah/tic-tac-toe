import GameBoard from "./GameBoard";
import PlayerInfo from "./PlayerInfo";
import HUDFooterTile from "./HUDFooterTile";

import logo from "../assets/images/logo.svg";
import restartLogo from "../assets/images/icon-restart.svg";
import { useSelector } from "react-redux";

const GameHUD = () => {
  const currentPlayer = useSelector((state) => state.gameSlice.currentPlayer);
  const history = useSelector((state) => state.playerSlice.history);
  return (
    <section className="hud">
      <div className="hud--header">
        <div className="hud--header__logo">
          <img src={logo} alt="logo" />
        </div>
        <PlayerInfo />
        <div className="hud--header__reset">
          <img src={restartLogo} alt="restart" />
        </div>
      </div>
      <GameBoard />
      <div className="hud--footer">
        <HUDFooterTile
          className="hud--footer--button primary"
          subtitle={`${currentPlayer === 1 ? "x" : "o"} (you)`}
          title={`${history.winCount}`}
        />
        <HUDFooterTile
          className="hud--footer--button tertiary"
          subtitle={"ties"}
          title={`${history.ties}`}
        />
        <HUDFooterTile
          className="hud--footer--button secondary"
          subtitle={`${currentPlayer === 1 ? "o" : "x"} (cpu)`}
          title={`${history.loseCount}`}
        />
      </div>
    </section>
  );
};

export default GameHUD;
