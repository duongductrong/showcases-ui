import Button from "../Button/Button";
import Paperation from "../Paperation/Paperation";
import Text from "../Text/Text";

function DashboardComponent() {
  return (
    <div className="dashboard-components">
      <div className="dashboard-components__header"></div>
      <Paperation className="dashboard-components__content">
        <Text className="dashboard-components__content__title" size="md">
          No components created yet
        </Text>
        <Text
          className="dashboard-components__content__desc"
          weight="none"
          size="sm"
        >
          Simply create your first component. <br /> Just click on the button
        </Text>

        <Button color="primary">+ Add component (129)</Button>
      </Paperation>
    </div>
  );
}

export default DashboardComponent;
