import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { complianceChart } from "../data/dashboardData";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function ComplianceChart() {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="dashboard-card">

      <h4 className="mb-4">
        Compliance Status
      </h4>

      <div
        style={{
          height: "320px",
          width: "100%",
        }}
      >
        <Doughnut
          data={complianceChart}
          options={options}
        />
      </div>

    </div>
  );
}

export default ComplianceChart;