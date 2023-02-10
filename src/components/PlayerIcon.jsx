import logo_o from "../assets/images/icon-o.svg";
import logo_x from "../assets/images/icon-x.svg";

const PlayerIconFilled = (props) => {
  return (
    <img src={props.player === 1 ? logo_x : logo_o} className="player--logo" />
  );
};

export default PlayerIconFilled;
