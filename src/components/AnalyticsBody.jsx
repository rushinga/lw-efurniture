import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../styles/adminstyles.css";

const AnalyticsBody = () => {
  const [roleStats, setRoleStats] = useState({});
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: "donut", // Donut chart
        height: 350,
        width: "100%",
      },
      colors: [
        "#1E88E5", // Blue for Admin
        "#FF7043", // Orange for Seller
        "#66BB6A", // Green for User
      ],
      labels: ["Admin", "Seller", "User"], // Role labels
      title: {
        text: "Role Distribution Overview",
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
      legend: {
        show: true,
        position: "top",
      },
    },
  });

  useEffect(() => {
    fetch("http://localhost:9090/admin/user-role-stats")
      .then((response) => response.json())
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          setRoleStats(data);

          const adminCount = data["ROLE_ADMIN"] || 0;
          const sellerCount = data["ROLE_SELLER"] || 0;
          const userCount = data["ROLE_USER"] || 0;

          // Update chart data with new series
          setChartData((prevData) => ({
            ...prevData,
            series: [adminCount, sellerCount, userCount], // Data for roles
          }));
        } else {
          console.error("No data available for role statistics.");
        }
      })
      .catch((error) => {
        console.error("Error fetching role statistics:", error);
      });
  }, []);

  return (
    <div className="col-xxl-4">
      <div className="card custom-card">
        <div className="card-header">
          <div className="card-title">Role Statistics Overview</div>
        </div>
        <div className="card-body">
          <div className="role-stats-footer">
            <div className="role-stat">
              <div className="stat-title">Admin</div>
              <div className="stat-value">{roleStats["ROLE_ADMIN"] || 0}</div>
            </div>
            <div className="role-stat">
              <div className="stat-title">Seller</div>
              <div className="stat-value">{roleStats["ROLE_SELLER"] || 0}</div>
            </div>
            <div className="role-stat">
              <div className="stat-title">User</div>
              <div className="stat-value">{roleStats["ROLE_USER"] || 0}</div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div id="role-stats-chart">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="donut"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsBody;
