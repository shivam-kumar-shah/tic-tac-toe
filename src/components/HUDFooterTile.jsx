const HUDFooterTile = (props) => {
  return (
    <div className={props.className}>
      {props.subtitle}
      {props.title}
    </div>
  );
};

export default HUDFooterTile;
