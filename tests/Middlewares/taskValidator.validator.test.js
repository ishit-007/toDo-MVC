const taskValidator = require('../../Middlewares/taskValidator.validator');

describe('Middleware Testing for GET Request Validator', () => {
  //write test case testing getValidator middleware 
  it('should validate the id-->and Throw Error', async () => {
    const mockReq = {
      params: {
        id: -1
      }
    };
    const mockResp = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
    const next = jest.fn();
    await taskValidator.getValidator(mockReq, mockResp, next);
    expect(next).not.toBeCalled();
    expect(mockResp.status).toBeCalledWith(400);
    expect(mockResp.send).toBeCalledWith('"id" must be greater than or equal to 1');
  }
  );
  it('should validate the id-->and not Throw Error', async () => {
    const mockReq = {
      params: {
        id: 1
      }
    };
    const mockResp = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
    const next = jest.fn();
    await taskValidator.getValidator(mockReq, mockResp, next);
    expect(next).toBeCalled();
    expect(mockResp.status).not.toBeCalled();
    expect(mockResp.send).not.toBeCalled();
  }
  );
});

describe('Middleware Testing for POST Request Validator', () => {
  it('should validate the name-->and Throw Error', async () => {
    // const mockReq={};
    // const mockResp={};
  });
});