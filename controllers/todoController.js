const mongoose = require("mongoose");
const Todo = require("../models/todo");

mongoose
  .connect(process.env.MONGODB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then()
  .catch(err => {
    console.log(err);
  });

//get all

const getAll = (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.status(200).json(todos);
  });
};

const addTodo = (req, res) => {
  const todo = new Todo({
    name: req.body.name,
    description: req.body.description,
    completed: req.body.completed
  });
  todo
    .save()
    .then(result => {
      res.status(201).json({
        message: "Successfully added a todo item",
        description: result
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = { getAll, addTodo };
