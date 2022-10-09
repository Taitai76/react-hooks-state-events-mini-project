import React, {useState} from "react";

function Task({cat, name}) {


  return (
    <div className="task">
      <div className="label">{cat}</div>
      <div className="text">{name}</div>
      <button  className="delete">X</button>
    </div>
  );
}

export default Task;
