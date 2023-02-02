const Services=require('../../Services/tasks');
const db=require('../../database/models');
describe('Services Testing',()=>{
  it('should return newly created task',async()=>{
    const mockReq={name:'Jogging'};
    const mockResp={name:'Jogging',id:1,isCompleted:false};
    jest.spyOn(db.Task,'create').mockResolvedValue(mockResp);
    const thisTask=await Services.postTasksService(mockReq);
    expect(thisTask).toEqual(mockResp);
  });
  it('should get all tasks',async()=>{
    const mockResp=[{name:'Jogging',id:1,isCompleted:false},{name:'Reading',id:2,isCompleted:false}];
    jest.spyOn(db.Task,'findAll').mockResolvedValue(mockResp);
    const allTasks=await Services.getTasksService();
    expect(allTasks).toEqual(mockResp);
  });
  it('should get task corresponding to that ID',async()=>{
    const mockReq={id:1};
    const mockResp={name:'Jogging',id:1,isCompleted:false};
    jest.spyOn(db.Task,'findOne').mockResolvedValue(mockResp);
    const thisTask=await Services.getSingleTaskService(mockReq);
    expect(thisTask).toEqual(mockResp);
  });
  it('should delete all completed tasks',async()=>{
    const mockResp=1;
    jest.spyOn(db.Task,'destroy').mockResolvedValue(mockResp);
    const deleteResp=await Services.deleteTasksService();
    expect(deleteResp).toEqual(mockResp);
  });
  it('should update task corresponding to that ID',async()=>{
    const mockReq={id:7};
    const mockResp=1;
    jest.spyOn(db.Task,'update').mockResolvedValue([1]);
    const updateTaskResp=await Services.patchTaskService( mockReq);
    expect(updateTaskResp).toStrictEqual(mockResp);
  });
});
