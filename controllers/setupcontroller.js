const { isValidObjectId } = require('mongoose');
var Todos = require('../models/todomodel');

module.exports= function(app) {

    app.get('/api/setupTodos', function(req, res){

        /// seeding the database
        var starterTodos= [
            {
            username:'test',
            todo:'BuyMilk',
            isDone: false,
            hasAttachment:false
            },
            {
            username:'test1',
            todo:'feed dog',
            isDone: false,
            hasAttachment:false  
            },
            {
            username:'test3',
            todo:'lear nnode',
            isDone: false,
            hasAttachment:false
            }
        ];
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });
}