import classnames from "classnames";

/** Text */
function Text({ size = "md", weight = "bold", className, children, ...props }) {
  return (
    <p
      className={classnames(
        "text",
        `text--${size}`,
        `text--${weight}`,
        className
      )}
    >
      {children}
    </p>
  );
}
/** End: Text */

export default Text;
