import classnames from "classnames";

/** Profile */
function Profile({ src, className, name, team, ...props }) {
  return (
    <div {...props} className={classnames("profile", className)}>
      <div className="profile__avatar">
        <img src={src} alt="Avatar" />
      </div>
      <div className="profile__info">
        <h2 className="profile__info__name">{name}</h2>
        <span className="profile__info__team">{team}</span>
      </div>
    </div>
  );
}
/** End: Profile */

export default Profile;
