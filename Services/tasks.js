const db = require('../database/models');
const { findTaskUsingId } = require('../utils/taskUtils');
const getTasksService = async () => {
  const resp = await db.Task.findAll();
  return resp;
};
const postTasksService = async (recievedData) => {
  const newTask = await db.Task.create({ isComplete: false, taskName: recievedData.name });
  return newTask;
};
const deleteTasksService = async () => {
  const deleteResp = await db.Task.destroy({ where: { isComplete: true } });
  return deleteResp;
};
const getSingleTaskService = async (id) => {
  const thisTask = await findTaskUsingId(id);
  return thisTask;
};
const patchTaskService = async (id) => {
  const updatedTask = await db.Task.update({ isComplete: true }, { where: { id: id } });
  return updatedTask[0];
};
module.exports =
{
  getTasksService,
  postTasksService,
  deleteTasksService,
  getSingleTaskService,
  patchTaskService,
};

