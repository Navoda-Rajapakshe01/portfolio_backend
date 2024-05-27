const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
app.use(express.json());

require('dotenv').config();
const Project = require('./Project');
const Skill = require('./Skill');

app.use(cors());

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

//create an endpoint to add a new project
app.post('/projects', async (req, res) => {
    const project = new Project(req.body);
    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//create an endpoint to update a project by id
app.patch('/projects/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (project) {
            project.set(req.body);
            const updatedProject = await project.save();
            res.json(updatedProject);

        } else {
            res.status(404).json({ message: 'Project not found' });
        }

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Delete a project by id
app.delete('/projects/:id', async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (project) {
            res.json({ message: 'Project deleted' });
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
