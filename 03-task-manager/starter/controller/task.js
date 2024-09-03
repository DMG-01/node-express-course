const Task = require("../models/task");

const getAllTask = (req, res) => {
  res.send("get all tasks");
};

const createTask = async (req, res) => {
  const task = Task.create(req.body);
  res.status(201).json({ task });
}

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update Task");
};

const deleteTask = (req, res) => {
  res.send("delete Task");
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
