import classnames from "classnames";

/** Medal */
function Medal({ type = "premium", icon, className, children, ...props }) {
  return (
    <div
      {...props}
      className={classnames("medal", className, {
        "medal--premium": type === "premium",
      })}
    >
      <div className="medal__icon">{icon}</div>
      <div className="medal__text">{children}</div>
    </div>
  );
}
/** End: Medal */

export default Medal;
