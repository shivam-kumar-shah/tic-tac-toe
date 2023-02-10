import PlayerIconFilled from "./PlayerIcon";

const GameTile = (props) => {
  return (
    <div className="game-board--tile" onClick={props.handleClick}>
      {props.value != -1 && <PlayerIconFilled player={props.value} />}
    </div>
  );
};

export default GameTile;
