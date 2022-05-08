// viết router cho Task r import vào index
import express from "express"
import { TaskController } from '*/controllers/task.controller'
import { TaskValidation } from '*/validations/task.validation'
const router = express.Router()

router.route('/')
  .post(TaskValidation.createNew, TaskController.createNew)

export const taskRoutes = router