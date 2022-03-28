import classNames from "classnames";

/** SideTeamProfile */
function SideTeamProfile({ avatarSource, className, ...props }) {
  return (
    <div {...props} className={classNames("side-team-profile", className)}>
      <div className="side-team-profile__avatar">
        <img src={avatarSource} alt="Avatar" />
      </div>
      <div className="side-team-profile__info">
        <h2 className="side-team-profile__info__name">Elden.dev</h2>
        <span className="side-team-profile__info__team">Frontend Team</span>
      </div>
    </div>
  );
}
/** End: SideTeamProfile */

export default SideTeamProfile;
