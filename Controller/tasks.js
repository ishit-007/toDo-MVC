const {getTasksService,postTasksService,deleteTasksService,getSingleTaskService,patchTaskService}=require('../Services/tasks');
const getTasks=(req,resp)=>{
  let tasks=getTasksService();
  resp.status(200).send(tasks);
};
const postTasksHandler=(req,resp)=>{
  const thisTask=postTasksService(req,resp);
  resp.status(201).send(thisTask);
};
const deleteTasksHandler=(req,resp)=>{
  let tasks=deleteTasksService(req,resp);
  resp.status(200).send(tasks);
};
const getSingleTaskHandler=(req,resp)=>{
  return getSingleTaskService(req,resp); 
};
const patchTaskHandler=(req,resp)=>{
  return patchTaskService(req,resp); 
};
module.exports={
  getTasks:getTasks,
  postTasksHandler:postTasksHandler,
  deleteTasksHandler:deleteTasksHandler,
  getSingleTaskHandler:getSingleTaskHandler,
  patchTaskHandler:patchTaskHandler
};