import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import cookieParser from 'cookie-parser'

import UserRouter from './user/user.router'
import StoreRouter from './store/store.router'

const { NODE_ENV } = process.env
const app = express()

if (NODE_ENV !== 'TESTING') app.use(morgan('dev'))

app.use(express.json())
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }))
app.use(helmet())
app.use(cookieParser())
app.use(compression())
app.use('/api/users', UserRouter)
app.use('/api/store', StoreRouter)

export default app
