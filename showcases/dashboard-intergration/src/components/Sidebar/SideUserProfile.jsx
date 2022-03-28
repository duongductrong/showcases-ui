import classNames from "classnames";

/** SideUserProfile */
function SideUserProfile({ src, name, className, ...props }) {
  return (
    <div {...props} className={classNames("side-user-profile", className)}>
      <div className="side-user-profile__avatar">
        <img src={src} alt={name} />
      </div>
      <div className="side-user-profile__info">
        <h3 className="side-user-profile__info__name">{name}</h3>
        <div className="side-user-profile__info__option">
          <div className="side-user-profile__info__option__bar"></div>
        </div>
      </div>
    </div>
  );
}
/** End: SideUserProfile */

export default SideUserProfile;
