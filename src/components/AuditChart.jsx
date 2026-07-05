import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AuditChart() {
  const data = {
    labels: [
      "ISO 27001",
      "ISO 27002",
      "ISO 42001",
    ],
    datasets: [
      {
        label: "Audit Progress (%)",
        data: [82, 75, 68],
        backgroundColor: [
          "#0d6efd",
          "#20c997",
          "#ffc107",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="dashboard-card">

      <h4 className="mb-4">
        Audit Progress
      </h4>

      <div
        style={{
          height: "320px",
        }}
      >
        <Bar
          data={data}
          options={options}
        />
      </div>

    </div>
  );
}

export default AuditChart;