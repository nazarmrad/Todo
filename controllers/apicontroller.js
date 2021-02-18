var Todos = require('../models/todomodel');
var bodyParser = require('body-parser');
const { isValidObjectId } = require('mongoose');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true }));
// fetching the todo list from the database of the "uname" user
    app.get('/api/todo/:uname', function(req, res){
        Todos.find({ username: req.params.uname }, function(err, todos) {
            if (err) throw err;
            console.log(todos);
            res.send(todos);

        });
    });

// fetching the todo of by id 
//   app.get('/api/todo/:id', function(req, res){
//        Todos.findById({ _id: req.params.id }, function(err, todo){
//
 //           if (err) throw err;
 //           console.log(todo);
 //           res.send(todo);
 //       });
 //   });


     
 app.get('/api/todo/:id', function(req, res) {
       
    Todos.findById(new ObjectId("602eb69e59b3fe8c13ca5ac8"), function(err, todo) {
        if (err) throw err;
        
        res.send(todo);
    });
     
 });

// creating a new todo, but updating an existing one if givin the id
    app.post('/api/todo', function(req, res){
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo, isDone : req.body.isDone, hasAttachment: req.body.hasAttachment}, function(err, todo) {
                    if (err) throw err;
                    res.send('Success');
                });
        }

        else {

            var newTodo = Todos({
                username: 'test9',
                todo: req.body.todo,
                isDone : req.body.isDone, 
                hasAttachment: req.body.hasAttachment

            });
            newTodo.save(function(err){
                res.send('success')
            });

        }

    });
/// deleting a todo list

    app.delete('/api/todo', function(req, res){
        Todos.findByIdAndRemove(req.body.id, function(err){
            if (err) throw err;

            res.send('success');

        });
    });
}
