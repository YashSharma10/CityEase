import React from "react";
import IssueForm from "../components/IssueForm";
import { useLocation } from "react-router-dom";

export const FormData = () => {
  const location = useLocation(); // Access the location object
  const message = location.state?.message; // 
  return (
    <div className="flex justify-center py-2">
      <IssueForm categoryTitle={message}/>
    </div>
  );
};
