import { TaskModel } from '*/models/task.model'

const createNew = async (data) => {
  try {
    const result = await TaskModel.createNew(data)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const TaskService = { createNew }