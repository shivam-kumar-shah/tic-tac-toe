import logo_o from "../assets/images/icon-o-outline.svg";
import logo_x from "../assets/images/icon-x-outline.svg";

const PlayerIconHollow = (props) => {
  const className = `player--logo ${props.className}`;
  return (
    <img
      src={props.player == 1 ? logo_x : logo_o}
      className={className}
      alt="hover-icon"
    />
  );
};

export default PlayerIconHollow;
