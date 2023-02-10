import logo_o from "../assets/images/icon-o.svg";
import logo_x from "../assets/images/icon-x.svg";

const PlayerIconFilled = (props) => {
  const className = `player--logo ${props.className}`;
  return (
    <img src={props.player == 1 ? logo_x : logo_o} className={className} />
  );
};

export default PlayerIconFilled;
