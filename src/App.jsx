import React, { useState } from "react";

import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";

const App = () => {
  // const message = "Hello World!";
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programção",
      completed: false,
    },
    {
      id: "2",
      title: "Lutar Jiu-Jitsu",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container"></div>
      <AddTask />
      <Tasks tasks={tasks} />
    </>
  );
};

export default App;
