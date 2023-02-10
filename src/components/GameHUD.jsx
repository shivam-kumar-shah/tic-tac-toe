import GameBoard from "./components/GameBoard";
import PlayerInfo from "./PlayerInfo";
import HUDFooterTile from "./HUDFooterTile";

const GameHUD = (props) => {
  <section className="hud">
    <div className="hud--header">
      <div className="hud--header__logo">
        <img src="assets/images/logo.svg" alt="logo" />
      </div>
      <PlayerInfo />
      <div className="hud--header__reset">
        <img src="assets/images/icon-restart.svg" alt="restart" />
      </div>
    </div>
    <GameBoard />
    <div className="hud--footer">
      <HUDFooterTile className="hud--footer__win-count" />
      <HUDFooterTile className="hud--footer__ties-count" />
      <HUDFooterTile className="hud--footer__lose-count" />
    </div>
  </section>;
};

export default GameHUD;
