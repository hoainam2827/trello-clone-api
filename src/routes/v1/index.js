import express from "express"
import { HttpStatusCode } from '*/utils/constants'
import { boardRoutes } from './board.route'
import { columnRoutes } from './column.route'
import { taskRoutes } from './task.route'
const router = express.Router()
// check status
router.get('/status', (req, res) => res.status(HttpStatusCode.OK).json({ status: 'OK!' }))

//board api
router.use('/boards', boardRoutes)

//column api
router.use('/columns', columnRoutes)

//task api
router.use('/tasks', taskRoutes)
export const apiV1 = router