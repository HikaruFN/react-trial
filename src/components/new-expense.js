import React from "react";
import Form from "./form";
import "./new-expense.css";
let name = "ciao";
const NewExpense = (props) => {
  const formDataHandler = (datas) => {
    const newData = {
      ...datas,
      id: Math.random().toString(),
    };
    props.collectData(newData);
  };

  return (
    <div className="new-expense">
      <Form saveFormData={formDataHandler} />
    </div>
  );
};

export default NewExpense;
