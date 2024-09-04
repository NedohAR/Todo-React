import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const addNewTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <div className="todo-input">
      <form className="input-form" onSubmit={addNewTodo}>
        <input
          className="input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
