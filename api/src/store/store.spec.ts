import request from 'supertest'

import app from '../app'
import DecryptDTO from '@utils/decrypt.dto'

const { JWT_TEST } = process.env
let arrRes: DecryptDTO[]

describe('Store Tests', () => {
  it('Create record', async () => {
    return await request.agent(app).post('/api/store')
      .send({
        website: 'Google',
        pass: 'mendes'
      })
      .set('Cookie', [`access_token=${JWT_TEST}`])
      .then((res) => {
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe('text/plain')
      })
  })
  it('Get records', async () => {
    return await request.agent(app).get('/api/store')
      .set('Cookie', [`access_token=${JWT_TEST}`])
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        arrRes = res.body
      })
  })
  it('Patch record', async () => {
    return await request.agent(app).patch(`/api/store/${arrRes[0].id}`)
      .send({
        website: 'facebook',
        pass: 'morais'
      })
      .set('Cookie', [`access_token=${JWT_TEST}`])
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('text/plain')
      })
  })
  it('Delete record', async () => {
    return await request.agent(app).delete(`/api/store/${arrRes[0].id}`)
      .set('Cookie', [`access_token=${JWT_TEST}`])
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('text/plain')
      })
  })
})
