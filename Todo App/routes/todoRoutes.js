import express from "express"
import {createTodo,getAllTodo,getTodo,updateTodo,deleteTodo,deleteAllTodo} from '../controllers/todoController.js'

const TodoRouter=express.Router();



TodoRouter.post('/create',createTodo)
TodoRouter.post('/update/:id',updateTodo)
TodoRouter.get('/getall',getAllTodo)
TodoRouter.get('/gettodo/:id',getTodo)
TodoRouter.post('/delete/:id',deleteTodo)
TodoRouter.post('/deleteall',deleteAllTodo)

export default TodoRouter