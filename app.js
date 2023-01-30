const express = require('express');
const app = express();
const PORT = 3000;

const taskRoutes=require('./Routes/taskRoutes.js');
app.use(express.json());
app.use(express.urlencoded({extended:false}));    //body parser deprecated

app.use('/',taskRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


// const express = require('express');
// const uuid=require('uuid');
// const router = express.Router();
// let tasks=[];

// router.get('/tasks', (req, resp) => {
//     resp.send(tasks);
// })
// router.post('/tasks', (req, resp) => {
//     const recievedData = req.body;
//     recievedData["id"] = uuid.v4();
//     recievedData["isComplete"] = false;
//     tasks.push(recievedData);
//     resp.send("Added");
// })
// router.get('/tasks/:id', (req, resp) => {
//     let indexOfObj=tasks.findIndex((task)=>task.id==req.params.id);
//     if(indexOfObj==-1){
//         resp.status(404).send("No tasks found");
//     }
//     else{
//         resp.status(200).send(tasks[indexOfObj]);
//     }
// })
// router.patch('/tasks/:id',(req,resp)=>{
//     let indexOfObj=tasks.findIndex((task)=>task.id==req.params.id);
//     if(indexOfObj==-1){
//         resp.status(404).send("No request found with given ID");
//     }
//     else{
//         let thisTask=tasks[indexOfObj];
//         thisTask.isComplete=!thisTask.isComplete;
//         resp.status(200).send(thisTask);
//     }
// })
// router.delete('/tasks/isComplete=true?',(req,resp)=>{
//     tasks=tasks.filter(task => task.isComplete==false);
//     resp.send(tasks);
// })
// module.exports = router;