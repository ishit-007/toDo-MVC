const {getTasksService,postTasksService,deleteTasksService,getSingleTaskService,patchTaskService}=require('../Services/tasks');
const getTasks=async(req,resp)=>{
  let tasks=await getTasksService();
  resp.status(200).send(tasks);
};
const postTasksHandler=async(req,resp)=>{
  const thisTask=await postTasksService(req.body);
  resp.status(201).send(thisTask);
};

const deleteTasksHandler=async(req,resp)=>{
  let deletedEntries=await deleteTasksService();
  resp.status(200).send(`Deleted ${deletedEntries} entries`);
};
const getSingleTaskHandler=async(req,resp)=>{
  const thisTask=await getSingleTaskService(req.params.id);
  if(thisTask===null){
    resp.status(404).send('Task not found');
  }
  else{
    resp.status(200).send(thisTask);
  }
};
const patchTaskHandler=async(req,resp)=>{
  const updatedEntries=await patchTaskService(req.params.id);
  resp.status(200).send(`Updated ${updatedEntries} entries`);
};
module.exports={
  getTasks:getTasks,
  postTasksHandler:postTasksHandler,
  deleteTasksHandler:deleteTasksHandler,
  getSingleTaskHandler:getSingleTaskHandler,
  patchTaskHandler:patchTaskHandler
};