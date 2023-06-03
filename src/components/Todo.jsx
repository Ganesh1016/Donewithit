import PropTypes from "prop-types";
import { useState } from "react";
import "../index.css";

const Todo = ({ task }) => {
  const [complete, setComplete] = useState(false);

  const taskComplete = () => {
    setComplete(!complete);
  };

  const [edit, setEdit] = useState(false);

  const editTask = () => {
    setEdit(!edit);
  };

  return (
    <div className="todo">
      <p
        contentEditable={edit}
        style={{ textDecoration: complete ? "line-through" : "none" }}
        onClick={taskComplete}
      >
        {task}
      </p>
      <div className="actions">
        <button
          type="button"
          className="text-white w-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          style={{ fontSize: "0.8rem" }}
          onClick={editTask}
        >
          Edit
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
