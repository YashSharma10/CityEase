import React, { useState } from "react";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";
import { TbMapPinCode } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";

const IssueForm = ({ categoryTitle }) => {
  const [formData, setFormData] = useState({
    location: "",
    subLocation: "",
    subCategory: "",
    pincode: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("category", categoryTitle);
    data.append("location", formData.location);
    data.append("subLocation", formData.subLocation);
    data.append("subCategory", formData.subCategory);
    data.append("pincode", formData.pincode);
    data.append("description", formData.description);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await axios.post("/api/submit-report", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error submitting report", error);
      alert("Failed to submit report");
    }
  };

  return (
    <form
      className="flex flex-col gap-2 bg-slate-50 py-5 px-10 rounded-md w-[700px]"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl mb-2">Category : {categoryTitle}</h1>
      <label className="input input-bordered flex items-center gap-2">
        <CiLocationOn />
        <input
          type="text"
          className="grow"
          placeholder="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <CiLocationOn />
        <input
          type="text"
          className="grow"
          placeholder="Sub-Location"
          name="subLocation"
          value={formData.subLocation}
          onChange={handleChange}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <BiCategory />
        <input
          type="text"
          className="grow"
          placeholder="Sub-Category"
          name="subCategory"
          value={formData.subCategory}
          onChange={handleChange}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <TbMapPinCode />
        <input
          type="text"
          className="grow"
          placeholder="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
      </label>
      <input
        type="file"
        className="file-input file-input-bordered w-full"
        onChange={handleFileChange}
      />
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      <div className="flex justify-between">
        <button type="reset" className="btn btn-outline btn-secondary">
          Clear
        </button>
        <button type="submit" className="btn btn-outline btn-accent">
          Submit
        </button>
      </div>
    </form>
  );
};

export default IssueForm;
