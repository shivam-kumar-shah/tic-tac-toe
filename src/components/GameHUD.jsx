import GameBoard from "./GameBoard";
import PlayerInfo from "./PlayerInfo";
import HUDFooterTile from "./HUDFooterTile";

import logo from "../assets/images/logo.svg";
import restartLogo from "../assets/images/icon-restart.svg";

import { actions } from "../store/gameSlice";
import { useDispatch, useSelector } from "react-redux";

const GameHUD = () => {
  const currentPlayer = useSelector((state) => state.gameSlice.currentPlayer);
  const history = useSelector((state) => state.gameSlice.history);

  const dispatch = useDispatch();
  return (
    <section className="hud">
      <div className="hud--header">
        <div className="hud--header__logo">
          <img src={logo} alt="logo" />
        </div>
        <PlayerInfo />
        <div
          className="hud--header__reset"
          onClick={() => {
            dispatch(actions.resetState());
          }}
        >
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
