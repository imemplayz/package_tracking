const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    name: String,
    objectif: String,
    color: String,
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;