const express = require('express');
const app = express();
const port = 5000;


require('dotenv').config();
const Project = require('./Project');
const Skill = require('./Skill');

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
app.get('/skill', async (req, res) => {
    try {
        const skill = await Skill.find();
        res.json(skill);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

