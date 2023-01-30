const uuid=require('uuid');
let tasks=[];
const getTasksService=()=>{
  return tasks;
};
const postTasksService=(req)=>{
  const recievedData = req.body;
  recievedData['id'] = uuid.v4();
  recievedData['isComplete'] = false; 
  tasks.push(recievedData);
  return recievedData;
};
const deleteTasksService=()=>{
  tasks=tasks.filter(task => task.isComplete==false);
  return tasks;
};
const getSingleTaskService=(req,resp)=>{
  let indexOfObj=tasks.findIndex((task)=>task.id==req.params.id);
  if(indexOfObj==-1){
    return resp.status(404).send('No tasks found');
  }
  else{
    return resp.status(200).send(tasks[indexOfObj]);
  }
};
const patchTaskService=(req,resp)=>{
  let indexOfObj=tasks.findIndex((task)=>task.id==req.params.id);
  if(indexOfObj==-1){
    resp.status(404).send('No request found with given ID');
  }
  else{
    let thisTask=tasks[indexOfObj];
    thisTask.isComplete=!thisTask.isComplete;
    resp.status(200).send(thisTask);
  }
};
module.exports={
  getTasksService:getTasksService,
  postTasksService:postTasksService,
  deleteTasksService:deleteTasksService,
  getSingleTaskService:getSingleTaskService,
  patchTaskService:patchTaskService
};