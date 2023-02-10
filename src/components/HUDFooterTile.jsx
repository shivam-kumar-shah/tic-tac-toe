const HUDFooterTile = (props) => {
  return (
    <div className={props.className}>
      <span className="subtitle">{props.subtitle}</span>
      <span className="title">{props.title}</span>
    </div>
  );
};

export default HUDFooterTile;
