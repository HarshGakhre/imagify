import express from 'express'
import {
    userCredits,
    registerUser,
    loginUser,
   
} from '../controllers/UserController.js'
import authUser from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', authUser, userCredits)


export default userRouter