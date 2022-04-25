import express from "express"
import { HttpStatusCode } from '*/utils/constants'
import { boardRoutes } from './board.route'
const router = express.Router()
// check status
router.get('/status', (req, res) => res.status(HttpStatusCode.OK).json({ status: 'OK!' }))

//board api
router.use('/boards', boardRoutes)
export const apiV1 = router