const mongoose = require('./db');

const skillSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;