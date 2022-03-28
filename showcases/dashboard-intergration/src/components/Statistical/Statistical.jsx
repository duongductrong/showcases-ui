import classNames from "classnames";
import React from "react";
import { MdShowChart } from "react-icons/md";
import Paperation from "../Paperation/Paperation";
import Text from "../Text/Text";
import Profile from "../Profile/Profile";

/** Statistical */
function Statistical({
  src,
  name,
  team,
  className,
  children,
  tasks,
  completed,
  previousProfit = 0,
  currentProfit = 0,
  dateTime = "Yesterday",
  ...props
}) {
  const profitModified = previousProfit > currentProfit ? "down" : "up";

  return (
    <Paperation className={classNames("statistical", className)}>
      <div className="statistical__detail">
        <Profile
          className="statistical__detail__profile"
          src={src}
          name={name}
          team={team}
        />

        <div className="statistical__detail__tasks">
          <p className="statistical__detail__tasks__title">
            {completed} from {tasks} tasks completed
          </p>
          <div
            className="statistical__detail__tasks__progress"
            style={{
              "--statistical-progress": `${(completed / tasks) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div
        className={`statistical__parameters statistical__parameters--${profitModified}`}
      >
        <MdShowChart className="statistical__parameters__icon" />

        <Text size="md" className="statistical__parameters__profit">
          $
          {new Intl.NumberFormat("vi-VN").format(
            currentProfit - previousProfit
          )}
        </Text>
        <Text size="xs" className="statistical__parameters__time">
          {dateTime}
        </Text>
      </div>
    </Paperation>
  );
}
/** End: Statistical */

export default Statistical;
