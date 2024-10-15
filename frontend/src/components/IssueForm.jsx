import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";

const IssueForm = () => {
  return (
    <form className="flex flex-col gap-2 bg-slate-50 py-5 px-20 rounded-md w-full">
      <label className="input input-bordered flex items-center gap-2">
        <CiLocationOn />
        <input type="text" className="grow" placeholder="Location" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <BiCategory />
        <input type="text" className="grow" placeholder="Category" />
      </label>
      <input type="file" className="file-input file-input-bordered w-full " />
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Bio"
      ></textarea>
      <div className="flex justify-between">
        <button className="btn btn-outline btn-accent">Submit</button>
        <button className="btn btn-outline btn-secondary">Clear</button>
      </div>
    </form>
  );
};

export default IssueForm;
