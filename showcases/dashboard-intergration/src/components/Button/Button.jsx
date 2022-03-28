import classNames from "classnames";
import { cloneElement } from "react";

/** Button */
function Button({ children, className, iconAfter, color = "dark", ...props }) {
  return (
    <button
      {...props}
      className={classNames("btn", `btn--${color}`, className)}
    >
      {children}

      {iconAfter && cloneElement(iconAfter, { className: "btn__icon-after" })}
    </button>
  );
}
/** End:Button */

export default Button;
