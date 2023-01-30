const {getTasksService,postTasksService,deleteTasksService,getSingleTaskService,patchTaskService}=require('../Services/tasks');
const getTasks=(req,resp)=>{
  console.log('Get Tasks called');
  let tasks=getTasksService();
  resp.send(tasks);
};
const postTasksHandler=(req,resp)=>{
  console.log('Post Tasks called');
  const thisTask=postTasksService(req,resp);
  resp.send(thisTask);
};
const deleteTasksHandler=(req,resp)=>{
  console.log('Delete Tasks called');
  let tasks=deleteTasksService(req,resp);
  resp.send(tasks);
};
const getSingleTaskHandler=(req,resp)=>{
  console.log('Get Single Task called');
  return getSingleTaskService(req,resp);
  //let indexOfObj=tasks.findIndex((task)=>task.id==req.params.id);
    
};
const patchTaskHandler=(req,resp)=>{
  console.log('Patch Tasks called');
  return patchTaskService(req,resp); 
};
module.exports={
  getTasks:getTasks,
  postTasksHandler:postTasksHandler,
  deleteTasksHandler:deleteTasksHandler,
  getSingleTaskHandler:getSingleTaskHandler,
  patchTaskHandler:patchTaskHandler
};