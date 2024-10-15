import React from "react";
import IssueForm from "../components/IssueForm";
import { useLocation } from "react-router-dom";

export const FormData = () => {
  const location = useLocation();
  const message = location.state?.message;
  const subCategoryTitle = location.state?.subCategoryTitle;
  return (
    <div className="flex justify-center py-2">
      <IssueForm categoryTitle={message} subCategoryTitle={subCategoryTitle} />
    </div>
  );
};
