//generic function to validate request body data against joi scheme
//source: https://dev.to/itnext/joi-awesome-code-validation-for-node-js-and-express-35pk
export const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error == null) {
      next();
    } else {
      const errMessage = error.details.map((i) => i.message).join(",");
      console.error("invalid entry data: ", errMessage);
      res.status(400).json({ message: errMessage });
    }
  };
};
