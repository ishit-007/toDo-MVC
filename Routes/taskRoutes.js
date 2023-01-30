const express = require('express');
const router = express.Router();
const {getTasks,postTasksHandler,deleteTasksHandler,getSingleTaskHandler,patchTaskHandler}=require('../Controller/tasks');

router.get('/tasks', getTasks);
router.post('/tasks', postTasksHandler);
router.delete('/tasks/isComplete=true?',deleteTasksHandler);

router.get('/tasks/:id',getSingleTaskHandler);
router.patch('/tasks/:id',patchTaskHandler);

module.exports = router;