import React, {useState} from "react";
import Task from "./Task";

function TaskList({Tasks, selectedCategory}) {

  const itemsToDisplay = Tasks.filter((Task) => {
    if (selectedCategory === "All") return true;

    return (Task.category === selectedCategory);
  });

  return (
    <div className="tasks">
      {itemsToDisplay.map((task, index)=> {
        return(
          <Task key={index} name={task.text} cat={task.category} />
        )
      })}
    </div>
  );
}

export default TaskList;
