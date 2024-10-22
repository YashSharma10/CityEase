import React, { useState } from "react";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";
import { TbMapPinCode } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { useAuth } from "../context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles

const sectorData = {
  "Sector 47": {
    subLocations: [
      "Hilton Garden Inn",
      "Huda Market",
      "Arcadia Market",
      "Uniworld Gardens",
      "Mayfield Garden",
    ],
    pincode: "122018",
  },
  "Sector 53": {
    subLocations: [
      "Paras Downtown Mall",
      "Sector 54 Chowk",
      "La Lagune Apartments",
      "Tulip White",
      "Golf Estate Road",
    ],
    pincode: "122002",
  },
  "Sector 49": {
    subLocations: [
      "Omaxe Mall",
      "Orchid Island",
      "Vatika City",
      "Spaze Privy",
      "Sapphire Mall",
    ],
    pincode: "122018",
  },
  "Sector 70": {
    subLocations: [
      "M3M Escala",
      "GPL Eden Heights",
      "Tulip Orange",
      "Shree Vardhman",
      "BPTP Astaire Gardens",
    ],
    pincode: "122018",
  },
  "Sector 72": {
    subLocations: [
      "Tata Primanti",
      "Emaar Digi Homes",
      "Bestech Park View",
      "Pioneer Urban Square",
      "Paras Irene",
    ],
    pincode: "122018",
  },
  "Sector 43": {
    subLocations: [
      "Hamilton Court",
      "Beverly Park",
      "The Laburnum",
      "Regent House",
      "Suncity",
    ],
    pincode: "122018",
  },
  "Sector 22": {
    subLocations: [
      "Ambience Creacions",
      "Huda Market",
      "Sector 21 Metro Station",
      "Ansal Utility Commercial Complex",
      "Maruti Vihar",
    ],
    pincode: "122018",
  },
  "Sector 10A": {
    subLocations: [
      "Huda Colony",
      "Police Colony",
      "Hanuman Mandir",
      "Shanti Nagar",
      "Sector 9 Extension",
    ],
    pincode: "122018",
  },
  "Sector 92": {
    subLocations: [
      "Ansal Heights",
      "Sare Homes",
      "Bestech Park View Ananda",
      "Raheja Navodaya",
      "GLS Avenue 51",
    ],
    pincode: "122018",
  },
  "Sector 85": {
    subLocations: [
      "Orris Carnation",
      "Godrej Icon",
      "ATS Triumph",
      "Orris Market City",
      "SS Plaza",
    ],
    pincode: "122018",
  },
  // Add other sectors as needed...
};

const IssueForm = ({ categoryTitle, subCategoryTitle }) => {
  const { authUser } = useAuth();

  const initialFormState = {
    email: authUser,
    location: "",
    subLocation: "",
    subCategory: "",
    pincode: "",
    description: "",
    image: null,
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Automatically set pincode when location is selected
    if (name === "location") {
      const selectedSector = sectorData[value];
      if (selectedSector) {
        setFormData({
          ...formData,
          location: value,
          subLocation: "",
          pincode: selectedSector.pincode, // Auto-fill the pincode
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleReset = () => {
    // Reset form data to the initial state
    setFormData(initialFormState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks before form submission
    if (!formData.location) {
      toast.error("Please select a location.");
      return;
    }
    if (!formData.subLocation) {
      toast.error("Please select a sub-location.");
      return;
    }
    if (!formData.subCategory) {
      toast.error("Please select a sub-category.");
      return;
    }
    if (!formData.description) {
      toast.error("Please enter a description.");
      return;
    }

    const data = new FormData();
    data.append("category", categoryTitle);
    data.append("location", formData.location);
    data.append("subLocation", formData.subLocation);
    data.append("subCategory", formData.subCategory);
    data.append("pincode", formData.pincode);
    data.append("description", formData.description);
    data.append("email", authUser);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await axios.post(
        "http://localhost:6005/api/submit-report",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(response.data.message);
      handleReset(); // Clear form after successful submission
    } catch (error) {
      console.error("Error submitting report", error);
      toast.error("Failed to submit report");
    }
  };

  const availableSubLocations =
    sectorData[formData.location]?.subLocations || [];

  return (
    <div className="flex flex-col items-center">
  <ToastContainer />
  <form
    className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl" // Increased max width
    onSubmit={handleSubmit}
  >
    <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">
      Category: {categoryTitle}
    </h1>

    {/* Location (Sector) Dropdown */}
    <label className="block mb-4">
      <span className="text-gray-600 flex items-center gap-2">
        <CiLocationOn />
        Location (Sector)
      </span>
      <select
        className="mt-1 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" // Increased padding for a cleaner look
        name="location"
        value={formData.location}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select Location (Sector)
        </option>
        {Object.keys(sectorData).map((sector, index) => (
          <option key={index} value={sector}>
            {sector}
          </option>
        ))}
      </select>
    </label>

    {/* Sub-Location Dropdown */}
    <label className="block mb-4">
      <span className="text-gray-600 flex items-center gap-2">
        <CiLocationOn />
        Sub-Location
      </span>
      <select
        className="mt-1 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" // Increased padding for a cleaner look
        name="subLocation"
        value={formData.subLocation}
        onChange={handleChange}
        disabled={!formData.location}
      >
        <option value="" disabled>
          Select Sub-Location
        </option>
        {availableSubLocations.map((subLoc, index) => (
          <option key={index} value={subLoc}>
            {subLoc}
          </option>
        ))}
      </select>
    </label>

    {/* Sub-Category Dropdown */}
    <label className="block mb-4">
      <span className="text-gray-600 flex items-center gap-2">
        <BiCategory />
        Sub-Category
      </span>
      <select
        className="mt-1 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" // Increased padding for a cleaner look
        name="subCategory"
        value={formData.subCategory}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select Sub-Category
        </option>
        {subCategoryTitle?.map((subCat, index) => (
          <option key={index} value={subCat}>
            {subCat}
          </option>
        ))}
      </select>
    </label>

    {/* Pincode Field (Auto-filled based on location) */}
    <label className="block mb-4">
      <span className="text-gray-600 flex items-center gap-2">
        <TbMapPinCode />
        Pincode
      </span>
      <input
        type="text"
        className="mt-1 block w-full p-3 border rounded-md bg-gray-100 cursor-not-allowed" // Increased padding for a cleaner look
        placeholder="Pincode"
        name="pincode"
        value={formData.pincode}
        readOnly
      />
    </label>

    {/* Description Field */}
    <label className="block mb-4">
      <span className="text-gray-600">Description</span>
      <textarea
        className="mt-1 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" // Increased padding for a cleaner look
        rows="4"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
    </label>

    {/* Image Upload */}
    <label className="block mb-4">
      <span className="text-gray-600">Upload Image</span>
      <input
        type="file"
        className="mt-1 block w-full p-3 border rounded-md" // Increased padding for a cleaner look
        accept="image/*"
        onChange={handleFileChange}
      />
    </label>

    {/* Submit Button */}
    <div className="flex justify-center">
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
    </div>
  </form>
</div>

  );
};

export default IssueForm;
