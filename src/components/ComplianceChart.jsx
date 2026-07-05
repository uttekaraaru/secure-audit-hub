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
        position: "bottom",

        labels: {
          color: "#ffffff",
          padding: 20,
          font: {
            size: 13,
            weight: "bold",
          },
        },
      },

      tooltip: {
        backgroundColor: "#112B45",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#0d6efd",
        borderWidth: 1,
      },

    },

    cutout: "68%",
  };

  return (
    <div className="dashboard-card">

      <div className="d-flex justify-content-between align-items-center mb-3">

        <h4 className="mb-0">
          📊 Compliance Status
        </h4>

        <span className="badge bg-success">
          82%
        </span>

      </div>

      <p className="text-light mb-4">
        Overall ISO compliance distribution.
      </p>

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