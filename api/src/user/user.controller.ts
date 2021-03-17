import { Request, Response } from 'express'
import { hashSync, compareSync } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import knex from '@db/connection'

const { JWT_SECRET_KEY, NODE_ENV } = process.env

class UserController {
  async SignUp (req: Request, res: Response) {
    const { email, password, username } = req.body
    const exists = await knex('users').where({ email })
    if (exists.length >= 1) {
      return res.sendStatus(409)
    }
    const hashed = await hashSync(password, 8)
    await knex('users').insert({ email, password: hashed, username })
    return res.sendStatus(201)
  }

  async SignIn (req: Request, res: Response) {
    const { email, password } = req.body
    const exists = await knex('users').where({ email })
    if (exists.length < 1) {
      return res.sendStatus(404)
    }
    const isValid = await compareSync(password, exists[0].password)
    if (!isValid) {
      return res.sendStatus(409)
    }
    const token = sign({ id: exists[0].id }, JWT_SECRET_KEY)
    return res.cookie('access_token', token, { httpOnly: true, secure: NODE_ENV === 'PRODUCTION' })
      .json({ username: exists[0].username }).status(200)
  }
}

export default new UserController()
