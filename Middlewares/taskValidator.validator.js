const Joi = require('joi');
const {HttpError} = require('../utils/httpError');
const idSchema = Joi.object({
  id: Joi.number().integer().min(1).max(1000).required(),
});
const nameSchema = Joi.object({
  name: Joi.string().alphanum().min(1).max(30).required()
});
const postValidator = async (req, resp, next) => {
  try {
    const { error } = nameSchema.validate(req.body);
    if (error) {
      throw new HttpError(error.message, 400);
    }
    next();
  }
  catch (error) {
    if (error instanceof HttpError) {
      resp.status(error.statusCode).json({ message: error.message });
    }
  }

};
const getValidator = async (req, resp, next) => {
  try {
    const { error } = idSchema.validate(req.params);
    if (error) {
      console.log('Inside CustomMiddleware');
      throw new HttpError(error.message, 400);
    }
    next();
  }
  catch (error) {
    if (error instanceof HttpError) {
      resp.status(error.statusCode).json({ message: error.message });
    }
  }
};
const patchValidator = async (req, resp, next) => {
  try {
    const { error } = idSchema.validate(req.params);
    if (error) {
      throw new HttpError(error.message, 400);
    }
    next();
  }
  catch (error) {
    if (error instanceof HttpError) {
      resp.status(error.statusCode).json({ message: error.message });
    }
  }
};
module.exports = {
  getValidator,
  postValidator,
  patchValidator,
};