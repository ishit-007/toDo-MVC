const express = require('express');
const router = express.Router();
const {getTasks,postTasksHandler,deleteTasksHandler,getSingleTaskHandler,patchTaskHandler}=require('../Controller/tasks');
const Validator=require('../Middlewares/taskValidator.validator.js');

router.get('/tasks', getTasks);
router.post('/tasks',Validator.postValidator, postTasksHandler);
router.delete('/tasks/isComplete=true?',deleteTasksHandler);
router.get('/tasks/:id',Validator.getValidator,getSingleTaskHandler);
router.patch('/tasks/:id',Validator.patchValidator,patchTaskHandler);

module.exports = router;