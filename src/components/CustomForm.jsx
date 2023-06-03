import { useState } from "react";
import "../index.css";
import Todo from "./Todo";

const CustomForm = () => {
  const [task, setTask] = useState("");

  const textChange = (e) => {
    let newTask = e.target.value;
    setTask(newTask);
  };

  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTask("");
    setTodos([...todos, task]);
  };

  return (
    <>
      <form action="" className="todo-input">
        <div className="wrapper">
          <input
            type="text"
            className="todo-input"
            placeholder="Add new tasks"
            onChange={textChange}
            value={task}
            id="addTasks"
            required
          />
          <button className="todo-button" type="submit" onClick={addTodo}>
            Add
          </button>
        </div>
      </form>
      <div className="checklist">
        {todos.map((task, index) => {
          return <Todo key={index} task={task} />;
        })}
      </div>
    </>
  );
};

export default CustomForm;
