const GameTile = (props) => {
  return (
    <div className="game-board--tile" onClick={props.handleClick}>
      {props.value}
    </div>
  );
};

export default GameTile;
