import { FaPlus } from "react-icons/fa";
import Paperation from "../Paperation/Paperation";
import PaperationHeader from "../Paperation/PaperationHeader";
import Ranker from "../Ranker/Ranker";

function DashboardRanking() {
  return (
    <Paperation className="dashboard-ranking">
      <PaperationHeader
        name="Top countries"
        subName="Favorites"
        icon={<FaPlus />}
      ></PaperationHeader>

      <div className="dashboard-ranking__main">
        <Ranker
          index={1}
          name="Vietnam 1"
          flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/640px-Flag_of_Vietnam.svg.png"
          profit="up"
          profitValue={20000000}
        />
        <Ranker
          index={2}
          name="Country 2"
          flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/640px-Flag_of_Vietnam.svg.png"
          profit="down"
          profitValue={20000000}
        />
        <Ranker
          index={3}
          name="Country 3"
          flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/640px-Flag_of_Vietnam.svg.png"
          profit="down"
          profitValue={20000000}
        />
        <Ranker
          index={4}
          name="Country 4"
          flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/640px-Flag_of_Vietnam.svg.png"
          profit="up"
          profitValue={20000000}
        />
      </div>
    </Paperation>
  );
}

export default DashboardRanking;
