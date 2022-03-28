import classnames from "classnames";

/** Paperation */
function Paperation({ color = "dark", className, children, ...props }) {
  return (
    <div
      {...props}
      className={classnames("paperation", `paperation--${color}`, className)}
    >
      {children}
    </div>
  );
}
/** End: Paperation */

export default Paperation;
