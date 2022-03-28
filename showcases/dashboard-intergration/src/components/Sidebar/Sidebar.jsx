import { useMemo, useState } from "react";
import {
  FaBuffer,
  FaChartPie,
  FaRegSun,
  FaRocketchat,
  FaTasks,
  FaUserFriends,
} from "react-icons/fa";
import SideTeamProfile from "./SideTeamProfile";
import SideUserProfile from "./SideUserProfile";
import SideUsedSpace from "./SideUsedSpace";
import List from "../List/List";
import ListItem from "../List/ListItem";
import ListLegend from "../List/ListLegend";

function Sidebar() {
  const listMenuItems = useMemo(() => {
    return [
      {
        type: "item",
        id: "dashboard",
        text: "Dashboard",
        icon: <FaChartPie />,
      },
      {
        type: "item",
        id: "overview",
        text: "Overview",
        icon: <FaBuffer />,
      },
      {
        type: "item",
        id: "chat",
        text: "Chat",
        icon: <FaRocketchat />,
        badge: 5,
      },
      {
        type: "item",
        id: "team",
        text: "Team",
        icon: <FaUserFriends />,
      },
      {
        type: "legend",
        id: "shortcuts",
        text: "SHORTCUTS",
      },
      {
        type: "item",
        id: "tasks",
        text: "Tasks",
        icon: <FaTasks />,
      },
      {
        type: "item",
        id: "reports",
        text: "Reports",
        icon: <FaBuffer />,
      },
      {
        type: "item",
        id: "settings",
        text: "Settings",
        icon: <FaRegSun />,
      },
    ];
  }, []);
  const [active, setActive] = useState("dashboard");

  const onChangeActiveItem = (id) => () => {
    setActive(id);
  };

  return (
    <div className="sidebar-intergration">
      <div className="sidebar-intergration--box">
        <h1 className="sidebar-intergration__logo">Logo here</h1>
      </div>

      <div className="sidebar-intergration--box">
        <SideTeamProfile avatarSource="https://ui-avatars.com/api/?name=Edendev&size=500" />
      </div>

      <List className="sidebar-intergration__menu">
        {listMenuItems.map((item) => {
          if (item.type === "legend") {
            return <ListLegend key={item.id}>{item.text}</ListLegend>;
          }
          return (
            <ListItem
              key={item.id}
              icon={item.icon}
              active={item.id === active}
              badge={item.badge || false}
              onClick={onChangeActiveItem(item.id)}
            >
              {item.text}
            </ListItem>
          );
        })}
      </List>

      <div className="sidebar-intergration--box">
        <SideUsedSpace
          title="Used Space"
          desc="Admin updated 09:12 am <br/> November 08, 2021"
          progress={71}
        />
      </div>

      <div className="sidebar-intergration--box">
        <SideUserProfile
          className="sidebar-intergration__profile"
          name="Jerry Wilson"
          src="https://ui-avatars.com/api/?name=Edendev&size=500"
        />
      </div>
    </div>
  );
}

export default Sidebar;
