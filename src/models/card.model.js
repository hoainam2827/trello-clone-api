import Joi from 'joi'
import { getDB } from "*/config/mongodb"
const taskCollectionName = 'tasks'
const taskCollectionSchema = Joi.object({
  boardId: Joi.string().required(),
  columnId: Joi.string().required(),
  title: Joi.string().required().min(3).max(20),
  cover: Joi.string().default(null),
  createdAt: Joi.date().timestamp().default(Date.now()),
  updatedAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false)
})

// abortEarly: false để hiển thị tất cả lỗi khi validate
const validateSchema = async (data) => {
  return await taskCollectionSchema.validateAsync(data, { abortEarly: false })
}

const createNew = async (data) => {
  try {
    const value = await validateSchema(data)
    const result = await getDB().collection(taskCollectionName).insertOne(value)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const TaskModel = { createNew }