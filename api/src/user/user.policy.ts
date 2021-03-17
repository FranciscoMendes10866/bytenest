import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

class UserPolicy {
  SignUpPolicy (req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      username: Joi.string().required(),
      password: Joi.string().min(8).max(32).alphanum().required()
    })
    const { email, username, password } = req.body
    const data = { email, username, password }
    const { error } = schema.validate(data)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          return res.json({ msg: 'Email error.' })
        case 'username':
          return res.json({ msg: 'Username error.' })
        case 'password':
          return res.json({ msg: 'Password error.' })
        default:
          return res.json({ msg: 'Schema not valid.' })
      }
    }
    return next()
  }

  SignInPolicy (req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(32).alphanum().required()
    })
    const { email, password } = req.body
    const data = { email, password }
    const { error } = schema.validate(data)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          return res.json({ msg: 'Email error.' })
        case 'password':
          return res.json({ msg: 'Password error.' })
        default:
          return res.json({ msg: 'Schema not valid' })
      }
    }
    return next()
  }
}

export default new UserPolicy()
