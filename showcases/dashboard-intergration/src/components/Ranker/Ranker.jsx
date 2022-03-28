import classNames from "classnames";
import { FaArrowUp } from "react-icons/fa";

/** Ranker */
function Ranker({
  flag,
  name,
  index,
  profitValue,
  className,
  profit,
  ...props
}) {
  return (
    <div
      {...props}
      className={classNames("ranker", `ranker--profit-${profit}`, className)}
    >
      <span className="ranker__index">{index ?? 1}</span>
      <img className="ranker__country" src={flag} alt={name} />
      <span className="ranker__name">{name}</span>

      <span className="ranker__profit">
        $ {new Intl.NumberFormat("vi-VN").format(profitValue)}
      </span>
      <span className="ranker__growth">
        <FaArrowUp className="ranker__growth__icon" />
      </span>
    </div>
  );
}
/** End: Ranker */

export default Ranker;
