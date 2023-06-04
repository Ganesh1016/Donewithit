import PropTypes from "prop-types";
import { useState } from "react";
import "../index.css";

const Todo = ({ task }) => {
  const [todoState, setTodoState] = useState({
    edit: false,
    editedTask: task,
    complete: false,
    delete: false,
  });

  const toggleEdit = () => {
    setTodoState((prevState) => ({
      ...prevState,
      edit: !prevState.edit,
    }));
  };

  const toggleComplete = () => {
    setTodoState((prevState) => ({
      ...prevState,
      complete: !prevState.complete,
    }));
  };

  const handleEdit = (e) => {
    setTodoState((prevState) => ({ ...prevState, editedTask: e.target.value }));
  };

  const handleSave = () => {
    const newTask = todoState.editedTask;
    console.log(newTask);

    setTodoState((prevState) => {
      return {
        ...prevState,
        edit: !prevState.edit,
        editedTask: newTask,
        task: newTask,
      };
    });

    // setTodoState(())
  };

  return (
    <div className="todo">
      <input
        type="text"
        id="task"
        style={{
          textDecoration: todoState.complete ? "line-through" : "none",
          border: todoState.edit ? "1px solid black" : "none",
          borderRadius: "5px",
          outline: "none",
          backgroundColor: "transparent",
        }}
        disabled={!todoState.edit}
        onInput={handleEdit}
        value={todoState.editedTask}
      />
      <input
        type="checkbox"
        name="task-complete"
        id=""
        onChange={toggleComplete}
      />
      <div className="actions">
        <button
          type="button"
          className="text-white w-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          style={{ fontSize: "0.8rem" }}
          onClick={todoState.edit ? handleSave : toggleEdit}
        >
          {todoState.edit ? "Save" : "Edit"}
        </button>
        <button
          type="button"
          className="text-white w-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-small rounded-sm text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          style={{ fontSize: "0.8rem" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  task: PropTypes.string.isRequired,
};

export default Todo;
