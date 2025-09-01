import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { getTasks, addTask, completeTask, deleteTask } from "./services/api";

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      const tasks = await getTasks();
      setTodos(tasks);
      setError(null);
    } catch (err) {
      console.error("Load error:", err.message);
      setError("⚠️ Cannot connect to backend. Showing no tasks.");
      setTodos([]);
    }
  }

  async function handleAdd(task) {
    try {
      const newTask = await addTask(task);
      setTodos([newTask, ...todos]);
      setError(null);
    } catch (err) {
      console.error("Add error:", err.message);
      setError("⚠️ Failed to add task (backend offline?).");
    }
  }

  async function handleToggle(id) {
    try {
      const updated = await completeTask(id);
      setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
      setError(null);
    } catch (err) {
      console.error("Toggle error:", err.message);
      setError("⚠️ Failed to update task (backend offline?).");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTask(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      setError(null);
    } catch (err) {
      console.error("Delete error:", err.message);
      setError("⚠️ Failed to delete task (backend offline?).");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-8 flex items-center justify-center gap-2">
          ✅ My Todo App
        </h1>

        {error && (
          <div className="mb-4 p-4 text-sm text-red-800 bg-red-100 border border-red-300 rounded-xl shadow">
            {error}
          </div>
        )}

        <TodoInput addTodo={handleAdd} />
        <TodoList
          todos={todos}
          toggleTodo={handleToggle}
          deleteTodo={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
