import React from "react";
import { useSelector } from "react-redux";

// Components

export default function EditProjectPageModal({ currentProject }) {
  const admin = useSelector(store => store.admin);
  return (
    
      <h2>Редактирование проекта {admin.currentProject.name}</h2>
    
  );
}