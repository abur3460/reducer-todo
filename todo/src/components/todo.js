import React from "react";
import "./../App.css";

const Todo = (props) => {
  const handleToggle = (id) => {
    props.dispatch({ type: "COMPLETED", id: id });
  };

  return (
    <div>
      {props.state.map((todo) => {
        return (
          <div className="todoArea">
            <div
              // change classname if true or false
              className={`todo${todo.completed ? "completed" : ""}`}
              onClick={() => handleToggle(todo.id)}
              key={todo.id}
            >
              <p>{todo.item}</p>
              {/* cheat way of hiding check until completion */}
              <i
                className={`fa fa-check-circle${
                  todo.completed ? "" : "completed"
                }`}
                size="3rem"
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
