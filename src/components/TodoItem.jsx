import React, { useState } from "react";

const TodoItem = ({ todo, remove, toggle, edit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const editTodo = () => {
    setIsEditing(true);
  };

  const saveEditTodo = () => {
    edit(todo.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        {isEditing ? (
          <input
            type="text"
            className="input-field"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <span className="todo-title">{todo.title}</span>
        )}
      </div>
      <div className="todo-buttons">
        {isEditing ? (
          <button className="save-button" onClick={saveEditTodo}>
            Save
          </button>
        ) : (
          <>
            <button className="toggle-button" onClick={() => toggle(todo.id)}>
              {todo.completed ? "Undo" : "Done"}
            </button>
            <button className="edit-button" onClick={editTodo}>
              Edit
            </button>
            <button className="delete-button" onClick={() => remove(todo)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
