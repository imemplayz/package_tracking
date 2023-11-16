const express = require('express');
const cors = require('cors');

const app = express();

const Team = require('../models/Team');

app.use(cors());

//display all teams
const displayAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//display a team
const displayTeam = async (req, res) => {
    try {
        const { teamId } = req.params;
        const team = await Team.findById(teamId);

    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }

    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
    }
}

//add a team
const addTeam = async (req, res) => {
    try {
        const team = new Team(req.body);
        await team.save();
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//update a team
const updateTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Team.findByIdAndUpdate(id, req.body, { new: true });
        if (updated) {
            return res.status(200).json(updated);
        }
        throw new Error("Team not found");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//delete a team
const deleteTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Team.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send("Team deleted");
        }
        throw new Error("Team not found");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    displayAllTeams,
    displayTeam,
    addTeam,
    updateTeam,
    deleteTeam
}

    