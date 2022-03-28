import classnames from "classnames";

/** List, ListItem, ListLegend */
function List({ children, className, ...props }) {
  return <div className={classnames("list", className)}>{children}</div>;
}

export default List;
