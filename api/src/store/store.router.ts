import { Router } from 'express'

import StoreController from './store.controller'
import AuthGuard from '@middlewares/auth.guard'
import StorePolicy from './store.policy'

const router = Router()

router.post('/', AuthGuard, StorePolicy.GeneralPolicy, StoreController.Create)
router.get('/', AuthGuard, StoreController.Find)
router.patch('/:id', AuthGuard, StorePolicy.GeneralPolicy, StoreController.Patch)
router.delete('/:id', AuthGuard, StoreController.Destroy)

export default router
