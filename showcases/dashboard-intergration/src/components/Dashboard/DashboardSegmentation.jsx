import { FaAngleRight, FaQuestion } from "react-icons/fa";
import Button from "../Button/Button";
import Paperation from "../Paperation/Paperation";
import PaperationHeader from "../Paperation/PaperationHeader";
import Segment from "../Segment/Segment";

function DashboardSegmentation() {
  const numberalsProps = [
    {
      color: "#363636",
      value: 800,
    },
    {
      color: "#7c8bb2",
      value: 441,
    },
    {
      color: "#27375f",
      value: 233,
    },
    {
      color: "#104bd5",
      value: 126,
    },
  ];

  return (
    <Paperation className="dashboard-segmentation">
      <PaperationHeader
        name="Segmentation"
        subName="All users"
        icon={<FaQuestion />}
      />
      <div className="dashboard-segmentation__elements">
        <div className="dashboard-segmentation__elements__detail">
          <ul>
            <li>Not specified</li>
            <li>Male</li>
            <li>Female</li>
            <li>Other</li>
          </ul>

          <Button
            className="dashboard-segmentation__anchor"
            iconAfter={<FaAngleRight />}
          >
            Details
          </Button>
        </div>

        <Segment
          className="dashboard-segmentation__elements__segments"
          numberals={numberalsProps}
        />
      </div>
    </Paperation>
  );
}

export default DashboardSegmentation;
