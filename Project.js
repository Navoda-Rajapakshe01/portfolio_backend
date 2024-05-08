const mongoose = require('./db');

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const skillSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;