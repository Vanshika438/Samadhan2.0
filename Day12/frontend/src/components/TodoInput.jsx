import { useState } from "react";

function TodoInput({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 bg-white shadow-md p-4 rounded-2xl border border-gray-200"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-5 py-2 rounded-xl transition shadow-md"
      >
        ➕ Add
      </button>
    </form>
  );
}

export default TodoInput;
