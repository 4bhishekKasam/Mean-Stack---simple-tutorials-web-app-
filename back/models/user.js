const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = Schema({
    lang: String,
    topic: String,
    info : String
});

const User = module.exports = mongoose.model('User',UsersSchema);
















