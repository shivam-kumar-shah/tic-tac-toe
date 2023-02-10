import { useState } from "react";
import PlayerIconFilled from "./PlayerIcon";
import { useSelector } from "react-redux";

const GameTile = (props) => {
  const currentPlayer = useSelector((state) => state.gameSlice.currentPlayer);
  const className = `${
    props.value === -1
      ? "game-board--tile__hover"
      : "game-board--tile__hover hidden"
  }`;
  return (
    <div className="game-board--tile" onClick={props.handleClick}>
      {props.value != -1 && <PlayerIconFilled player={props.value} />}
      <PlayerIconFilled player={currentPlayer} className={className} />
    </div>
  );
};

export default GameTile;
