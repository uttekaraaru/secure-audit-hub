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

function AuditChart({ progress }) {
  // progress comes from the backend: [{ standard, percent, color }, ...]
  const fallback = [
    { standard: "ISO 27001", percent: 82, color: "#0d6efd" },
    { standard: "ISO 27002", percent: 75, color: "#20c997" },
    { standard: "ISO 42001", percent: 68, color: "#ffc107" },
  ];
  const rows = progress && progress.length > 0 ? progress : fallback;

  const data = {
    labels: rows.map((r) => r.standard),
    datasets: [
      {
        label: "Audit Progress (%)",
        data: rows.map((r) => r.percent),
        backgroundColor: rows.map((r) => r.color),
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#ffffff",
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

    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255,255,255,.08)",
        },
      },

      y: {
        beginAtZero: true,
        max: 100,

        ticks: {
          color: "#ffffff",
        },

        grid: {
          color: "rgba(255,255,255,.08)",
        },
      },
    },
  };

  return (
    <div className="dashboard-card">

      <div className="d-flex justify-content-between align-items-center mb-3">

        <h4 className="mb-0">
          📈 Audit Progress
        </h4>

        <span className="badge bg-primary">
          {rows.length} Standards
        </span>

      </div>

      <p className="text-light mb-4">
        Current audit completion percentage for implemented ISO standards.
      </p>

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