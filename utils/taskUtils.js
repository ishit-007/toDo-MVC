const db = require('../database/models');
const findTaskUsingId = async (id) => {
  const thisTask = await db.Task.findOne({ where: { id: id } });
  return thisTask;
};
module.exports = {
  findTaskUsingId: findTaskUsingId
};