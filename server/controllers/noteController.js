const express = require('express');
const cors = require('cors');

const Note = require('../models/Note');

const app = express();

app.use(cors());

//display all notes by teamId
const displayAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({ team: req.params.teamId });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//delete a note
const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Note.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send("Note deleted");
        }
        throw new Error("Note not found");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//add a note
const saveNote = async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//export
module.exports = {
    displayAllNotes,
    deleteNote,
    saveNote
};
