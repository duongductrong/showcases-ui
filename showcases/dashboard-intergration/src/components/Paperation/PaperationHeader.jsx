import Text from "../Text/Text";
import IconButton from "../IconButton/IconButton";

/** Paperation */
function PaperationHeader({
  name,
  subName,
  icon,
  className,
  children,
  ...props
}) {
  return (
    <div className="paperation-header">
      <h2 className="paperation-header__title">
        {name} <br />
        <Text size="xs">{subName}</Text>
      </h2>

      <IconButton>{icon}</IconButton>
    </div>
  );
}
/** End: Paperation */

export default PaperationHeader;
