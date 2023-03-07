const express = require('express');
const router = express.Router();
const { getTasks, postTasksHandler, deleteTasksHandler, getSingleTaskHandler, patchTaskHandler } = require('../Controller/tasks');
const Validator = require('../Middlewares/taskValidator.validator.js');

router.get('/tasks', Validator.tokenValidator, getTasks);
router.post('/tasks', Validator.tokenValidator, Validator.postValidator, postTasksHandler);
router.delete('/tasks/isComplete=true?',Validator.tokenValidator, deleteTasksHandler);
router.get('/tasks/:id', Validator.tokenValidator, Validator.getValidator, getSingleTaskHandler);
router.patch('/tasks/:id', Validator.tokenValidator, Validator.patchValidator, patchTaskHandler);

module.exports = router;