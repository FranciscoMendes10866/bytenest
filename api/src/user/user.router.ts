import { Router } from 'express'

import UserController from './user.controller'
import UserPolicy from './user.policy'
import AuthGuard from '../middlewares/auth.guard'

const router = Router()

router.post('/sign_up', UserPolicy.SignUpPolicy, UserController.SignUp)
router.post('/sign_in', UserPolicy.SignInPolicy, UserController.SignIn)
router.post('/logout', AuthGuard, UserController.Logout)

export default router
