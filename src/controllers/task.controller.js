import { HttpStatusCode } from '*/utils/constants'
import { TaskService } from '*/services/task.service'

const createNew = async (req, res) => {
  try {
    const result = await TaskService.createNew(req.body)
    res.status(HttpStatusCode.OK).json(result)
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER).json({
      error: error.message
    })
  }
}

export const TaskController = { createNew }