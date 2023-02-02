const tasksController = require('../../Controller/tasks');
const taskService = require('../../Services/tasks');

describe('Task Controller', () => {
  it('should create new tasks', async () => {
    jest.spyOn(taskService, 'postTasksService').mockResolvedValue({
      name: 'Task1',
      id: 1,
      isCompleted: false
    });
    const mockReq = {
      body: {
        name: 'Task1'
      }
    };
    const mockResp = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    await tasksController.postTasksHandler(mockReq, mockResp);
    expect(mockResp.send).toBeCalledWith({
      name: 'Task1',
      id: 1,
      isCompleted: false
    });
    expect(mockResp.status).toBeCalledWith(201);
  });

  it('should get task corresponding to that ID', async () => {
    jest.spyOn(taskService, 'getSingleTaskService').mockResolvedValue({
      id: 1,
      isComplete: false,
      name: 'Task1',
    });
    const mockReq = {
      params: {
        id: 1
      }
    };
    const mockResp = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
    await tasksController.getSingleTaskHandler(mockReq, mockResp);
    expect(mockResp.send).toBeCalledWith({
      id: 1,
      isComplete: false,
      name: 'Task1',
    });
    expect(mockResp.status).toBeCalledWith(200);
  });

  it('should get all tasks', async () => {
    const mockReq = {};
    const mockResp = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
    const objsArray = [{ id: 1, isComplete: false, name: 'Task1' },{id: 2, isComplete: false, name: 'Task 2' }];
    jest.spyOn(taskService, 'getTasksService').mockResolvedValue({ objsArray });
    await tasksController.getTasks(mockReq, mockResp);
    expect(mockResp.send).toBeCalledWith({ objsArray });
    expect(mockResp.status).toBeCalledWith(200);
  });
  it('should delete all completed tasks',async ()=>{
    const mockReq={};
    const mockResp={
      send:jest.fn(),
      status:jest.fn().mockReturnThis()
    };
    jest.spyOn(taskService,'deleteTasksService').mockResolvedValue(2);
    await tasksController.deleteTasksHandler(mockReq,mockResp);
    expect(mockResp.send).toBeCalledWith('Deleted 2 entries');
    expect(mockResp.status).toBeCalledWith(200);
  });
  it('should update the Completed status of a given task',async ()=>{
    const mockReq={
      params:{
        id:1,
      }
    };
    const mockResp={
      send:jest.fn(),
      status:jest.fn().mockReturnThis()
    };
    jest.spyOn(taskService,'patchTaskService').mockResolvedValue(1);
    await tasksController.patchTaskHandler(mockReq,mockResp);
    expect(mockResp.send).toBeCalledWith('Updated 1 entries');
    expect(mockResp.status).toBeCalledWith(200);
  });
});
