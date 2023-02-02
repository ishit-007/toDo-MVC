const taskService =require('../Services/tasks');
const getTasks=async(req,resp)=>{
  let tasks=await taskService.getTasksService();
  resp.status(200).json({data:tasks});
};
const postTasksHandler=async(req,resp)=>{
  const thisTask=await taskService.postTasksService(req.body);
  resp.status(201).json({'data':thisTask});
};
const deleteTasksHandler=async(req,resp)=>{
  let deletedEntries=await taskService.deleteTasksService();
  resp.status(200).json({message:`Deleted ${deletedEntries} entries`});
};
const getSingleTaskHandler=async(req,resp)=>{
  const thisTask=await taskService.getSingleTaskService(req.params.id);
  if(thisTask===null){
    resp.status(404).json({message:'Task not found'});
  }
  else{
    resp.status(200).json({'data':thisTask});
  }
};
const patchTaskHandler=async(req,resp)=>{
  const updatedEntries=await taskService.patchTaskService(req.params.id);
  if(updatedEntries===0){
    resp.status(404).json({message:'Task not found'});
  }
  else{
    resp.status(200).json({'message':`Updated ${updatedEntries} entries`});
  }
};
module.exports={
  getTasks,
  postTasksHandler,
  deleteTasksHandler,
  getSingleTaskHandler,
  patchTaskHandler,
};