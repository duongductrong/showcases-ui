import classnames from "classnames";

function ListItem({ children, className, active, icon, badge, ...props }) {
  return (
    <div
      {...props}
      className={classnames("list-item", className, {
        "list-item--active": active,
      })}
    >
      <div className="list-item__icon">{icon}</div>
      {children}
      {badge && <div className="list-item__badge">{badge}</div>}
    </div>
  );
}

export default ListItem;
