import React, { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem.jsx";
import TodoInput from "./components/TodoInput.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-title">Too List</h1>
        <TodoInput addTodo={addTodo} />
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              remove={removeTodo}
              edit={editTodo}
              toggle={toggleTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
