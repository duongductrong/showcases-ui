import React from "react";
import { FaConnectdevelop } from "react-icons/fa";
import DashboardChart from "../components/Dashboard/DashboardChart";
import DashboardComponent from "../components/Dashboard/DashboardComponent";
import DashboardRanking from "../components/Dashboard/DashboardRanking";
import DashboardRate from "../components/Dashboard/DashboardRate";
import DashboardSegmentation from "../components/Dashboard/DashboardSegmentation";
import Medal from "../components/Medal/Medal";
import Statistical from "../components/Statistical/Statistical";
import Text from "../components/Text/Text";

function Dashboard() {
  return (
    <div className="dashboard-view">
      <div className="dashboard-view__tilte">
        <div className="dashboard-view__title__wrap">
          <Text className="dashboard-view__title__tab" size="lg">
            Hello Willson
          </Text>
          <Medal type="premium" icon={<FaConnectdevelop />}>
            Premium
          </Medal>
        </div>

        <p className="dashboard-view__title__date">October 26</p>
      </div>
      <div className="dashboard-view__statisticals">
        <Statistical
          src="https://ui-avatars.com/api/?name=Edendev&size=500"
          name="Esther Howard 1"
          team="Marketing"
          tasks={20}
          completed={10}
          previousProfit={920348}
          currentProfit={10000000}
          dateTime="Today"
        ></Statistical>

        <Statistical
          src="https://ui-avatars.com/api/?name=Edendev&size=500"
          name="Esther Howard 2"
          team="Product Vietnam"
          tasks={75}
          completed={30}
          previousProfit={2300000}
          currentProfit={15000000}
          dateTime="Last month"
        ></Statistical>

        <Statistical
          src="https://ui-avatars.com/api/?name=Edendev&size=500"
          name="Esther Howard 3"
          team="Bussiness Development Vietnam"
          tasks={75}
          completed={10}
          previousProfit={5000000}
          currentProfit={200000}
          dateTime="Yesterday"
        ></Statistical>
      </div>
      <div className="dashboard-view__reports">
        <DashboardChart />
        <DashboardRanking />
      </div>

      <div className="dashboard-view__performance">
        <DashboardSegmentation />
        <DashboardRate percent={75.78} />
        <DashboardComponent />
      </div>
    </div>
  );
}

export default Dashboard;
