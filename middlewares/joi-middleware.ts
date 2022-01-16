import Joi from "joi";

function registerJoi(req: any, res: any, next: any) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().min(6).required(),
  });
  validateRequest(req, res, next, schema);
}

function validateRequest(req: any, res: any, next: any, schema: any) {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };
  const { error } = schema.validate(req.body, options);
  const valid = error == null;

  if (valid) {
    next();
  } else {
    const { details } = error;
    const message = details.map((i: any) => i.message).join(",");
    res.status(422).json({ error: message });
  }
}

export { registerJoi };
