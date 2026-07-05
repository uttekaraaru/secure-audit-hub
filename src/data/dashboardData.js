export const dashboardStats = [
  {
    id: 1,
    title: "Compliance",
    value: "82%",
    color: "success",
  },
  {
    id: 2,
    title: "Risk Score",
    value: "Medium",
    color: "warning",
  },
  {
    id: 3,
    title: "Documents",
    value: "4",
    color: "primary",
  },
  {
    id: 4,
    title: "Audit Tasks",
    value: "32",
    color: "danger",
  },
];

export const complianceChart = {
  labels: ["Compliant", "Pending", "Critical"],
  datasets: [
    {
      label: "Compliance Status",
      data: [82, 12, 6],
      backgroundColor: [
        "#198754",
        "#ffc107",
        "#dc3545",
      ],
    },
  ],
};