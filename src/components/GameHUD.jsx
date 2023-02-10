import GameBoard from "./GameBoard";
import PlayerInfo from "./PlayerInfo";
import HUDFooterTile from "./HUDFooterTile";

import logo from "../assets/images/logo.svg";
import restartLogo from "../assets/images/icon-restart.svg";

const GameHUD = () => {
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
        <HUDFooterTile className="hud--footer__win-count" />
        <HUDFooterTile className="hud--footer__ties-count" />
        <HUDFooterTile className="hud--footer__lose-count" />
      </div>
    </section>
  );
};

export default GameHUD;
