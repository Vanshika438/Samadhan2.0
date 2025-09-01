export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-4 rounded-2xl shadow-sm mb-4 border border-gray-200 hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 accent-green-600 cursor-pointer"
          disabled={todo.completed}
        />
        <span
          className={`text-lg font-medium ${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 text-lg font-bold transition"
      >
        ✕
      </button>
    </div>
  );
}
