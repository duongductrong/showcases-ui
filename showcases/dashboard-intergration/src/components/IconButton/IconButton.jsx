import classnames from "classnames";

/** IconButton */
function IconButton({ className, children, ...props }) {
  return (
    <div {...props} className={classnames("icon-button", className)}>
      {children}
    </div>
  );
}
/** End: IconButton */

export default IconButton;
