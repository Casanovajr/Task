import React, { useState } from "react";

import "./App.css";

const App = () => {
  // const message = "Hello World!";
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programção",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container"></div>
    </>
  );
};

export default App;
