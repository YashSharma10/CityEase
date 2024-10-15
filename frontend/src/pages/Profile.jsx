import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider"; // Assuming you have an auth context
import { toast } from "react-toastify";

const Profile = () => {
  const { authUser } = useAuth(); // Get the logged-in user
  const [userReports, setUserReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserReports = async () => {
      try {
        const response = await axios.get(
          `http://localhost:6005/profile/user-reports/${authUser}`
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

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>

      {/* Display basic user information */}
      <div className="bg-white p-4 shadow-md rounded-md mb-6">
        <h2 className="text-xl font-semibold">Email: {authUser}</h2>
        <p className="text-gray-600">Reports submitted by you:</p>
      </div>

      {/* Display reports */}
      {userReports.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userReports.map((report, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-md border border-gray-200"
            >
              <h3 className="text-lg font-bold mb-2">
                Category: {report.category}
              </h3>
              <p className="text-gray-700">Location: {report.location}</p>
              <p className="text-gray-700">Sub-Location: {report.subLocation}</p>
              <p className="text-gray-700">Sub-Category: {report.subCategory}</p>
              <p className="text-gray-700">Pincode: {report.pincode}</p>
              <p className="text-gray-700">Status: {report.status}</p>
              <p className="text-gray-700">Priority: {report.priority}</p>
              <p className="text-gray-700">
                Description: {report.description}
              </p>
              {report.image && (
                <img
                  src={report.image} // Make sure the image URL is correct
                  alt="Report"
                  className="mt-2 w-full object-cover rounded-md"
                />
              )}
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
