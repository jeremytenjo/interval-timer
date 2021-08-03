import Joi from 'joi'

export default Joi.object({
  name: Joi.string().required(),
  restMinutes: Joi.number(),
  workoutMinutes: Joi.number(),
  repetitions: Joi.number(),
  sets: Joi.number(),
})
