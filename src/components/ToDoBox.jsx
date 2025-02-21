import React from "react";

const ToDoBox = ({ todo, setTodo, actions, generateToDo }) => {
  return (
    <div className="box">
      <h2>To-Do List</h2>
      <textarea
        id="todo"
        placeholder="Generated to-do items..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => setTodo(generateToDo(actions))}>
        ✅ Generate To-Do List
      </button>
    </div>
  );
};

export default ToDoBox;