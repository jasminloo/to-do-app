const TodoTask = require('../models/TodoTask');

exports.createTodoItem = async (req, res) => {
  const todoTask = new TodoTask({
    content: req.body.content,
    user: req.body.user,
  });

  try {
    await todoTask.save();
    res.send({
      status: 'successfully created',
    });
  } catch (err) {
    res.send({
      status: 'fail to create item',
    });
  }
};

exports.getAllItems = async (req, res) => {
  const user = req.params.userId;
  const tasks = await TodoTask.find({ user });
  res.send({
    status:'success',
    items: tasks
  });
};

exports.updateTodoItem = async (req, res) => {
  const id = req.params.id;
  try {
    await TodoTask.findByIdAndUpdate(id, { content: req.body.content });
    res.send({ 
      status: 'success'
    });
  } catch (err) {
    res.send(500, { 
      status: 'fail to update item'
    });
  }
};

exports.deleteTodoItem = async (req, res) => {
  const id = req.params.id;
  try {
    await TodoTask.findByIdAndDelete(id);
    res.send({ 
      status: `Removed item - ${id}`
    });
  } catch (err) {
    res.send(500, { 
      status: `fail to delete item ${id}`
    });
  }
};
