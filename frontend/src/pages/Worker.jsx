import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { PieChart } from "@mui/x-charts";

const Profile = () => {
  const { authUser } = useAuth();
  const [userReports, setUserReports] = useState([]);
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserReports = async () => {
      try {
        const response = await axios.get(
          "http://localhost:6005/profile/user-reports"
        );
        setUserReports(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user reports:", error);
        toast.error("Failed to load user data");
        setLoading(false);
      }
    };

    if (authUser) {
      fetchUserReports();
    }
  }, [authUser]);


  const handleMarkAsDone = async (reportId) => {
    try {
      await axios.put(`http://localhost:6005/api/reports/${reportId}/status`, { status: "completed" });
      setUserReports((prevReports) =>
        prevReports.map((report) =>
          report._id === reportId ? { ...report, status: "completed" } : report
        )
      );
      toast.success("Report marked as completed");
    } catch (error) {
      console.error("Error updating report status:", error);
      toast.error("Failed to update report status");
    }
  };



  let pendindData = userReports.filter(
    (reportItem) => reportItem.status == "pending"
  ).length;
  let completedData = userReports.length - pendindData;
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  // Filter reports to only show 'Street Light' category reports
  const filteredReports = userReports.filter(
    (report) => report.category === "Street Light"
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-1">
        <PieChart
          series={[
            {
              data: [
                {
                  id: 0,
                  value: pendindData,
                  label: "Pending",
                },
                {
                  arcLabel: "10",
                  id: 1,
                  value: completedData,
                  label: "Completed",
                },
              ],
            },
          ]}
          width={400}
          height={200}
        />

        {/* Display basic user information */}
        <div className="bg-white p-4 shadow-md rounded-md mb-6 flex-1">
          <h1 className="text-3xl font-bold mb-4">Worker Profile</h1>
          <h2 className="text-xl font-semibold">Email: {authUser}</h2>
          <p className="text-gray-600">Reports submitted by you:</p>
        </div>
      </div>

      {/* Display reports */}
      {filteredReports.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-md border border-gray-200"
            >
              <h3 className="text-lg font-bold mb-2">
                Category: {report.category}
              </h3>
              <p className="text-gray-700">Location: {report.location}</p>
              <p className="text-gray-700">
                Sub-Location: {report.subLocation}
              </p>
              <p className="text-gray-700">
                Sub-Category: {report.subCategory}
              </p>
              {/* <p className="text-gray-700">Pincode: {report.pincode}</p> */}
              <p className="text-gray-700">
                Status:{" "}
                {report.status == "pending" ? (
                  <span className="text-red-400">Pending</span>
                ) : (
                  <span className="text-green-500">Completed</span>
                )}
              </p>
              <p className="text-gray-700">Priority: {report.priority}</p>
              <p className="text-gray-700">Description: {report.description}</p>
              {report.image && (
                <img
                  src={report.image} // Make sure the image URL is correct
                  alt="Report"
                  className="mt-2 w-[300px] h-[260px] object-fill rounded-md"
                />
              )}
              <button
                onClick={() => handleMarkAsDone(report._id)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Mark as Done
              </button>
            </div>
            
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No reports found.</p>
      )}
    </div>
  );
};

export default Profile;
Road & Pavement Issues