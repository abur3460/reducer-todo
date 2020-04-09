import React from "react";
import TodoForm from "./components/todoForm";
import "./App.css";

function App() {
  return (
    <div className="todoList">
      <h1 className="title">React Todo List</h1>
      <TodoForm />
    </div>
  );
}
export default App;
