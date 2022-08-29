
// let arr=[
//     { id: 1, title: 'todo1', completed: false },
//     { id: 2, title: 'todo2', completed: false },
//     { id: 3, title: 'todo3', completed: true },
//     { id: 4, title: 'todo4', completed: true },
//     { id: 5, title: 'todo5', completed: false },
// ]
  exports.getUsers=(req,res)=>{
    // var obj=arr.find(e=>e.id==req.query.id)
    res.send(arr)
}
exports.createUser=(req,res)=>{
    arr.push(req.body)
    res.send(arr)
}

exports.updateUser=(req,res)=>{
    arr.forEach(e=>{
        if(e.id==req.body.id){
            e.name=req.body.name
        }
    })
    res.send(arr)
}

exports.deleteUser=(req,res)=>{
    arr=arr.filter(e=>e.id !=req.query.id)
    res.send(arr)
}

const  Todo = require("../models/TodoModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all todos
exports.listAllTodos = (req, res) => {
Todo.find({}, (err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(todo);
});
};
// createNewTodo function - To create new todo
exports.createNewTodo = (req, res) => {
    let  newTodo = new Todo (req.body);
    newTodo.save((err, todo) => {
    if (err) {
    res.status(500).send(err);
    }
    res.status(201).json(todo);
    });
};

// updateTodo function - To update todo status by id
exports.updateTodo = (req, res) => {
    Todo.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, todo) => {
    if (err) {
        console.log("error in back");
    res.status(500).send(err);
    }else{
        console.log("ok in back");
    res.status(200).json(todo);
    }
    
    });
};

// put and delete request for /todos endpoints
// deleteTodo function - To delete todo by id
exports.deleteTodo =  async ( req, res) => {
      await Todo.deleteOne({ title:req.params.id }).then(function(){
        res.status(200).send("data deleted");
    }).catch(function(error){
        res.status(500).send("data not deleted error: "+error);
        // Failure
    })

};

