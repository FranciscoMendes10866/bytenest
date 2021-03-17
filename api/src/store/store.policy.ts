import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

class StorePolicy {
  GeneralPolicy (req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      website: Joi.string().required(),
      pass: Joi.string().required()
    })
    const { website, pass } = req.body
    const data = { website, pass }
    const { error } = schema.validate(data)
    if (error) {
      switch (error.details[0].context.key) {
        case 'website':
          return res.json({ msg: 'Website error.' })
        case 'pass':
          return res.json({ msg: 'Pass error.' })
        default:
          return res.json({ msg: 'Schema not valid.' })
      }
    }
    return next()
  }
}

export default new StorePolicy()
