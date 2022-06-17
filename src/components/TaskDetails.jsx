import React from "react";
import { useParams } from "react-router-dom";

import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();

  return (
    <>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam minima
          officia perferendis molestiae. Placeat officia harum nisi veritatis,
          dolor ut adipisci sapiente voluptatum. Delectus sed ipsam error?
          Nobis, rerum nostrum!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
