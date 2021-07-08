//user input validation schemas

import Joi from "joi";

const schemas = {
  entry: Joi.object({
    name: Joi.string().required(),
    datetime: Joi.date().required(),
    location: Joi.string().required(),
    numFed: Joi.number().required(),
    feedType: Joi.string().required(),
    feedAmount: Joi.number().required(),
  }),
};

export default schemas;
