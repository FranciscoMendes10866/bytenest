import { Request, Response } from 'express'

import knex from '@db/connection'

import Encrypt from '@functions/encrypt'
import Decrypt from '@functions/decrypt'

class StoreController {
  async Create (req: Request, res: Response) {
    const { website, pass } = req.body
    const result = Encrypt(pass)
    await knex('stores').insert({
      website,
      pass: result.pass,
      buffer: result.buffer,
      key: result.key,
      userId: req.tokenId
    })
    return res.sendStatus(201)
  }

  async Find (req: Request, res: Response) {
    const all = await knex('stores').where({ userId: req.tokenId })
    const result = Decrypt(all)
    return res.json(result).status(200)
  }

  async Destroy (req: Request, res: Response) {
    const { id } = req.params
    const single = await knex('stores').where({ id })
    if (single.length < 1) {
      return res.sendStatus(404)
    } else if (single[0].userId !== req.tokenId) {
      return res.sendStatus(403)
    }
    await knex('stores').where({ id }).del()
    return res.sendStatus(200)
  }

  async Patch (req: Request, res: Response) {
    const { id } = req.params
    const { website, pass } = req.body
    const single = await knex('stores').where({ id })
    if (single.length < 1) {
      return res.sendStatus(404)
    } else if (single[0].userId !== req.tokenId) {
      return res.sendStatus(403)
    }
    const result = Encrypt(pass)
    await knex('stores').where({ id }).update({
      website,
      pass: result.pass,
      buffer: result.buffer,
      key: result.key,
      userId: req.tokenId
    })
    return res.sendStatus(200)
  }
}

export default new StoreController()
