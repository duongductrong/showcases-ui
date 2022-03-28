import { useEffect, useRef, useState } from "react";
import { FaQuestion } from "react-icons/fa";
import Paperation from "../Paperation/Paperation";
import PaperationHeader from "../Paperation/PaperationHeader";
import PercentationRate from "../PercentationRate/PercentationRate";

function DashboardRate({ percent = 0, ...props }) {
  const [frame, setFrame] = useState({
    width: 0,
    height: 0,
  });
  const refSvgContainer = useRef(null);

  useEffect(() => {
    setFrame({
      ...frame,
      width: refSvgContainer.current.clientWidth,
      height: refSvgContainer.current.clientWidth,
    });
  }, []);

  return (
    <Paperation className="dashboard-rate">
      <PaperationHeader
        name="Satisfaction rate"
        subName="From all projects"
        icon={<FaQuestion />}
      />

      <div
        ref={refSvgContainer}
        className="dashboard-rate__performance"
        style={{ maxWidth: "250px", margin: "auto" }}
      >
        <PercentationRate {...frame} strokeWidth={12} percent={percent} />
      </div>
    </Paperation>
  );
}

export default DashboardRate;
