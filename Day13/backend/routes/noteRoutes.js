const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// Create note
router.post("/", async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all notes
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Get single note
router.get("/:id", async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
});

// Update note
router.put("/:id", async (req, res) => {
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedNote);
});

// Delete note
router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

module.exports = router;
