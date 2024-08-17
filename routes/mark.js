import express from 'express'
import { prisma } from '../lib/db.js'
import { getMarkCategory } from '../controllers/mark.js'

export const markRouter = express.Router()

markRouter.get('/categories', getMarkCategory)