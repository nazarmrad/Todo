var mongoose = require('mongoose');

// creating the schema for the todo list
var Schema = mongoose.Schema;
var todoSchema = new Schema({
    username : String,
    todo : String,
    isDone: Boolean,
    hasAttachment: Boolean,
});

var Todos = mongoose.model("Todo", todoSchema);

module.exports = Todos;