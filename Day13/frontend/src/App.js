import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:5000/api/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get(API);
    setNotes(res.data);
  };

  const addNote = async () => {
    if (!form.title.trim() || !form.content.trim()) return;
    await axios.post(API, form);
    setForm({ title: "", content: "" });
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchNotes();
  };

  return (
    <div className="App">
      <h1>📒 Notes App</h1>

      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Write your note here..."
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <button onClick={addNote}>Add Note</button>

      <h2>My Notes</h2>
      {notes.map((note) => (
        <div key={note._id} className="note">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;