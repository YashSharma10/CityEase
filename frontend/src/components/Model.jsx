import React from "react";
import IssueForm from "./IssueForm";

const Model = ({ modelId, heading, message, action }) => {
  console.log(modelId);

  return (
    <dialog id={modelId} className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{heading}</h3>
        <p className="py-4">{message}</p>
        <IssueForm />
        {/* onClick={()=>document.getElementById(modalId).showModal()} */}
      </div>
    </dialog>
  );
};

export default Model;
